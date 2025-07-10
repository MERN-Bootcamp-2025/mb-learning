const express = require('express')
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/',productController.addProduct);
router.put('/:id',productController.updateProduct);
// router.delete('/:id',productController.deleteProductById);
router.delete('/delete-all',productController.deleteAllProducts);
router.delete('/:id',productController.findProductByIdAndDelete);

module.exports = router;