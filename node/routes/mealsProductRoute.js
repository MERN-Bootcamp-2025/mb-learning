const express = require('express');
const mealsProductController = require('../controllers/mealsProductController');
const router = express.Router();

router.get('/',mealsProductController.getAllMealsProduct);

module.exports = router;