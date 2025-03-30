const express = require('express');
const { getLocales } = require('../controllers/localeController');

const router = express.Router();

router.get('/', getLocales);

module.exports = router;