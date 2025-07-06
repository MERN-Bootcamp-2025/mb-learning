const { Meal, Product } = require("../models");

exports.getAllMeals = (req, res, next) => {
  Meal.findAll({
    include: {
      model: Product,
      through: { attributes: ["quantity"] },
    },
  })
    .then((meals) => res.json(meals))
    .catch((err) => {
      err.status(500);
      next(err);
    });
};

//get all rows from meals table, 
//for each meal, include its associated Products.
//from the junction table  MealsProduct, include only the quantity field