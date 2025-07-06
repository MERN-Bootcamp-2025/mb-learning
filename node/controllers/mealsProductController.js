const { MealsProduct } = require("../models");

exports.getAllMealsProduct = (req, res, next) => {
  MealsProduct.findAll()
    .then((result) => 
      res.json(result)
    )
    .catch((err) => {
      err.status(500);
      next(err);
    });
};
