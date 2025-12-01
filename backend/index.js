const path = require('path');
require('dotenv').config();

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const paletteRoutes = require('./routes/paletteRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/palettes', paletteRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});