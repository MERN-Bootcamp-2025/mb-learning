// const { sequelize, MealsProduct } = require("../models");

export const mealsProduct = [
  // Meal 1: Veg Combo Meal (Veg Burger, Fries, Coke)
  {id:1, meal_id: 1, prod_id: 11, quantity: 1 }, // Aloo Tikki Burger
  {id:2, meal_id: 1, prod_id: 13, quantity: 1 }, // French Fries
  {id:3, meal_id: 1, prod_id: 7, quantity: 1 }, // Coke

  // Meal 2: Chicken Combo Meal (Chicken Burger, Fries, Sprite)
  {id:4, meal_id: 2, prod_id: 3, quantity: 1 }, // Spicy Chicken Burger
  {id:5, meal_id: 2, prod_id: 13, quantity: 1 }, // French Fries
  {id:6, meal_id: 2, prod_id: 14, quantity: 1 }, // Sprite

  // Meal 3: Veg Deluxe Meal (Veg Burger, Fries, Sprite)
  {id:7, meal_id: 3, prod_id: 9, quantity: 1 }, // Paneer Tikka Burger
  {id:8, meal_id: 3, prod_id: 12, quantity: 1 }, // Fries Peri-Peri
  {id:9, meal_id: 3, prod_id: 14, quantity: 1 }, //Sprite

  // Meal 4: Chicken Power Meal (Chicken Burger, Wings, Coke)
  {id:10, meal_id: 4, prod_id: 3, quantity: 1 }, // Spicy Chicken Burger
  {id:11, meal_id: 4, prod_id: 13, quantity: 1 }, //French fries
  {id:12, meal_id: 4, prod_id: 7, quantity: 1 }, // Coke
];

// (async ()=>{
//     try {
//         await sequelize.sync();
//         await MealsProduct.bulkCreate(mealsProduct);
//         console.log('MealsProduct added successfully.')
//         process.exit();
//     } catch (error) {
//         console.error('Error seding products: ',error);
//         process.exit(1);
//     }
// })();
