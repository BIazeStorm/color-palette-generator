const Palette = require('../models/Palette');

// Отримати всі палітри
const getPalettes = async (req, res) => {
  try {
    const palettes = await Palette.find().sort({ createdAt: -1 });
    res.json(palettes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Зберегти нову палітру
const createPalette = async (req, res) => {
  try {
    const newPalette = new Palette({ colors: req.body.colors });
    const savedPalette = await newPalette.save();
    res.status(201).json(savedPalette);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPalettes, createPalette };