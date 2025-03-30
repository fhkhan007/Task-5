const { generateBooks } = require('../services/bookService');
const { DEFAULT_SEED, DEFAULT_PAGE, DEFAULT_PER_PAGE } = require('../config/constants');

function getBooks(req, res) {
  try {
    const {
      locale = 'en-US',
      seed = DEFAULT_SEED,
      page = DEFAULT_PAGE,
      perPage = DEFAULT_PER_PAGE,
      avgLikes = 0,
      avgReviews = 0
    } = req.query;

    const books = generateBooks(
      locale,
      Number(seed),
      Number(page),
      Number(perPage),
      parseFloat(avgLikes),
      parseFloat(avgReviews)
    );

    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate books' });
  }
}

module.exports = { getBooks };