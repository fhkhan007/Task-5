const { LOCALES } = require('../config/constants');

function getLocales(req, res) {
  try {
    res.json(LOCALES);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch locales' });
  }
}

module.exports = { getLocales };