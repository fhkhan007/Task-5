import { Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import Papa from 'papaparse';

export function ExportButton({ books }) {
  const exportToCSV = () => {
    const data = books.map(book => ({
      Index: book.index,
      ISBN: book.isbn,
      Title: book.title,
      Author: book.author,
      Publisher: book.publisher,
      Likes: book.likeCount,
      Reviews: book.reviews.length
    }));

    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'books.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant="contained"
      startIcon={<DownloadIcon />}
      onClick={exportToCSV}
      disabled={books.length === 0}
      fullWidth
    >
      Export to CSV
    </Button>
  );
}