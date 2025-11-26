const mongoose = require('mongoose');

const PaletteSchema = new mongoose.Schema({
  colors: [
    {
      id: String,
      hex: String,
      isLocked: Boolean
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Palette', PaletteSchema);