const express = require('express');
const router = express.Router();
const { getPalettes, createPalette } = require('../controllers/paletteController');


router.get('/', getPalettes);   // GET /api/palettes
router.post('/', createPalette); // POST /api/palettes

module.exports = router;