const { sequelize, Meal, Product, MealsProduct } = require("./models");
const { meals } = require("./data/dataMeals");
const { mealsProduct } = require("./data/dataMealsProduct");
const { product } = require("./data/dataProduct");

(async () => {
  try {
    await sequelize.sync();

    await Meal.bulkCreate(meals);
    await Product.bulkCreate(product);
    await MealsProduct.bulkCreate(mealsProduct);

    console.log('Seeding completed.');
    process.exit();
  } catch (err) {
    console.error('Error seeding:', err);
    process.exit(1);
  }
})();