// const { sequelize } = require("../models");
// const {  Meal } = require("../models");
// const {sequelize} = require('./util/database')


export const meals = [
  {
    id: 1,
    name: "Veg Combo Meal",
    price: 149.00,
    isVeg: true,
    desc: "Veg Burger (M) + Fries (M) + Coke",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503155850144103_482x264jpg"
  },
  {
    id: 2,
    name: "Chicken Combo Meal",
    price: 159.00,
    isVeg: false,
    desc: "Chicken Burger (M) + Fries (M) + Sprite",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503155436556551_482x264jpg"
  },
  {
    id: 3,
    name: "Veg Deluxe Meal",
    price: 169.00,
    isVeg: true,
    desc: "Veg Burger (L) + Fries (L) + Mirinda",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503161049212256_482x264jpg"
  },
  {
    id: 4,
    name: "Chicken Power Meal",
    price: 179.00,
    isVeg: false,
    desc: "Chicken Burger (L) + Wings + Coke",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503172237699289_482x264jpg"
  }
];

// (async()=>{
//     try{
//         await sequelize.sync();
//         await Meal.bulkCreate(meals);
//         console.log("Meals table seeded successfully.")
//         process.exit();
//     }catch(err){
//         console.log('Error seeding meals: ',err);
//         process.exit(1);
//     }
// })();
