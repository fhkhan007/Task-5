import { useState } from 'react';
import { BookDetails } from '../BookDetails';

export function BookRow({ book, style }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      style={{
        ...style,
        padding: '10px',
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        backgroundColor: expanded ? '#f0f8ff' : 'inherit'
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ width: '50px', fontWeight: 'bold' }}>{book.index}</span>
        <span style={{ width: '150px', fontFamily: 'monospace' }}>{book.isbn}</span>
        <span style={{ flex: 2, fontWeight: 'bold' }}>{book.title}</span>
        <span style={{ flex: 1 }}>{book.author}</span>
        <span style={{ flex: 1 }}>{book.publisher}</span>
      </div>
      {expanded && <BookDetails book={book} />}
    </div>
  );
}