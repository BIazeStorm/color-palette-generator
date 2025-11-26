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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});