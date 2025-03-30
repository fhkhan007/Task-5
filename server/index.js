const express = require('express');
const cors = require('cors');
const localeRoutes = require('./routes/localeRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Routes
app.use('/api/locales', localeRoutes);
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});