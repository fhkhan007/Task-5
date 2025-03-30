import { FixedSizeList as List } from 'react-window';
import { BookRow } from './BookRow';

export function BookList({ books, loading, fetchMore }) {
  const itemSize = (index) => {
    // This is a simplified version - in a real app you'd track which items are expanded
    return 50; // Base height
  };

  return (
    <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      {loading && books.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>
      ) : (
        <List
          height={600}
          itemCount={books.length}
          itemSize={50} // Fixed size for simplicity
          width="100%"
          onItemsRendered={({ visibleStopIndex }) => {
            if (visibleStopIndex === books.length - 1 && !loading) {
              fetchMore();
            }
          }}
        >
          {({ index, style }) => (
            <BookRow book={books[index]} style={style} />
          )}
        </List>
      )}
    </div>
  );
}