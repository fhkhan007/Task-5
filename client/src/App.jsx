import { useState } from 'react';
import { useBooks } from './hooks/useBooks';
import { Controls } from './components/Controls';
import { BookList } from './components/BookList';
import { Container, Typography } from '@mui/material';

function App() {
  const [locale, setLocale] = useState('en-US');
  const [seed, setSeed] = useState('42');
  const [avgLikes, setAvgLikes] = useState(0);
  const [avgReviews, setAvgReviews] = useState(0);
  
  const { books, loading, fetchMore } = useBooks(locale, seed, avgLikes, avgReviews);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Book Store Tester
      </Typography>
      
      <Controls
        locale={locale}
        setLocale={setLocale}
        seed={seed}
        setSeed={setSeed}
        avgLikes={avgLikes}
        setAvgLikes={setAvgLikes}
        avgReviews={avgReviews}
        setAvgReviews={setAvgReviews}
        books={books}
      />
      
      <BookList 
        books={books} 
        loading={loading} 
        fetchMore={fetchMore} 
      />
    </Container>
  );
}

export default App;