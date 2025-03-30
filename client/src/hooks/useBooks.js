import { useState, useEffect } from 'react';
import axios from 'axios';

export function useBooks(locale, seed, avgLikes, avgReviews) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (reset = false) => {
    try {
      setLoading(true);
      const newPage = reset ? 1 : page;
      const perPage = reset ? 20 : 10;
      
      const response = await axios.get('http://localhost:3001/api/books', {
        params: {
          locale,
          seed,
          page: newPage,
          perPage,
          avgLikes,
          avgReviews
        }
      });

      setBooks(prev => reset ? response.data : [...prev, ...response.data]);
      setPage(newPage + 1);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(true);
  }, [locale, seed, avgLikes, avgReviews]);

  return { books, loading, error, fetchMore: () => fetchBooks(false) };
}