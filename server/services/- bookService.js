const { faker } = require('@faker-js/faker');

function generateBook(locale, seed, index, avgLikes, avgReviews) {
  faker.seed(seed + index);
  faker.locale = locale;

  // Generate book details
  const title = faker.music.songName();
  const author = faker.name.fullName();
  const publisher = faker.company.name();
  const isbn = faker.random.numeric(13);

  // Generate likes
  const likeCount = Math.random() < (avgLikes % 1) ? 
    Math.ceil(avgLikes) : Math.floor(avgLikes);

  // Generate reviews
  const reviewCount = Math.round(faker.datatype.float({
    min: avgReviews * 0.7,
    max: avgReviews * 1.3
  }));

  const reviews = Array.from({ length: reviewCount }, () => ({
    text: faker.lorem.paragraph(),
    author: faker.name.fullName()
  }));

  return {
    id: seed + index,
    index,
    isbn,
    title,
    author,
    publisher,
    likeCount,
    reviews
  };
}

function generateBooks(locale, seed, page, perPage, avgLikes, avgReviews) {
  const books = [];
  const startIndex = (page - 1) * perPage + 1;

  for (let i = 0; i < perPage; i++) {
    books.push(
      generateBook(locale, seed, startIndex + i, avgLikes, avgReviews)
    );
  }

  return books;
}

module.exports = { generateBooks };
