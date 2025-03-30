export function BookReviews({ reviews }) {
    if (reviews.length === 0) return null;
  
    return (
      <div style={{ marginTop: '15px' }}>
        <h4>Reviews:</h4>
        {reviews.map((review, i) => (
          <div key={i} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px dashed #ddd' }}>
            <p>"{review.text}"</p>
            <p>- {review.author}</p>
          </div>
        ))}
      </div>
    );
  }