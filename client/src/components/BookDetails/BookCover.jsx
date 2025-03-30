export function BookCover({ title, author }) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
        color: 'white',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '15px',
        textAlign: 'center'
      }}>
        <h3>{title}</h3>
        <p>by {author}</p>
      </div>
    );
  }