const express = require('express');
const { getAllBooks } = require('../controllers/bookController');

const router = express.Router();

router.get('/books',getAllBooks);

module.exports = router;