const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController')

router.get('/',shopController.getAllProducts);
router.get('/:id',shopController.getProductById);

module.exports = router;