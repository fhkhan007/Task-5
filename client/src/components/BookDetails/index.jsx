import { BookCover } from './BookCover';
import { BookReviews } from './BookReviews';

export function BookDetails({ book }) {
  return (
    <div style={{ marginTop: '15px', padding: '15px', background: 'white', borderRadius: '4px' }}>
      <BookCover title={book.title} author={book.author} />
      <div style={{ display: 'flex', gap: '20px', marginBottom: '15px' }}>
        <p>Likes: {book.likeCount}</p>
        <p>Reviews: {book.reviews.length}</p>
      </div>
      <BookReviews reviews={book.reviews} />
    </div>
  );
}