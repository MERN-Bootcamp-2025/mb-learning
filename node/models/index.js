const sequelize = require('../util/database');
const Meal = require('./meal');
const MealsProduct = require('./mealProducts');
const Order = require('./order');
const Product = require('./products');

//Associations
Meal.belongsToMany(Product, {through: MealsProduct, foreignKey: 'meal_id'});
Product.belongsToMany(Meal, {through: MealsProduct, foreignKey:'prod_id'});

module.exports = {
    sequelize,
    Product,
    Meal,
    MealsProduct,
    Order
}