// const { sequelize } = require("../models");
// const {  Product } = require("../models");
// const {sequelize} = require('./util/database')

export const product = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    desc: "Beef patty, cheese, lettuce, tomato, and pickles",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503072916057414_482x264jpg",
    price: 199
  },
  {
    id: 2,
    name: "Bacon BBQ Burger",
    desc: "Juicy beef, crispy bacon, BBQ sauce, and onion rings",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503070849722919_482x264jpg",
    price: 229
  },
  {
    id: 3,
    name: "Spicy Chicken Burger",
    desc: "Crispy chicken fillet, spicy mayo, and jalapeños",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503070849722919_482x264jpg",
    price: 179
  },
  {
    id: 4,
    name: "Fish Fillet Burger",
    desc: "Crispy fish fillet, lettuce, and tartar sauce",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503070849722919_482x264jpg",
    price: 189
  },
  {
    id: 5,
    name: "Double Meat Supreme",
    desc: "Double beef patties, cheese, and smoky sauce",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503072204470258_482x264jpg",
    price: 249
  },
  {
    id: 6,
    name: "Egg & Sausage Burger",
    desc: "Sausage patty, egg, and cheese on an English Burger",
    isVeg: false,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250702115934679546_482x264jpg",
    price: 159
  },
  {
    id: 7,
    name: "Coke",
    desc: "Chilled Coca-Cola bottle",
    isVeg: true,
    category: "drinks",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503193204046514_482x264jpg",
    price: 49
  },
  {
    id: 8,
    name: "Veggie Delight",
    desc: "Grilled veggies with hummus and lettuce",
    isVeg: true,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503072916057414_482x264jpg",
    price: 149
  },
  {
    id: 9,
    name: "Paneer Tikka Burger",
    desc: "Spicy paneer tikka with onions and mint chutney",
    isVeg: true,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503072916057414_482x264jpg",
    price: 169
  },
  {
    id: 10,
    name: "Mushroom Melt",
    desc: "Sautéed mushrooms, cheese, and caramelized onions",
    isVeg: true,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503070849722919_482x264jpg",
    price: 159
  },
  {
    id: 11,
    name: "Aloo Tikki Burger",
    desc: "Crispy potato patty with masala sauce",
    isVeg: true,
    category: "burgers",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503072916057414_482x264jpg",
    price: 129
  },
  {
    id: 12,
    name: "Fries Peri-Peri",
    desc: "Cheesy vegetarian patty with crunchy lettuce",
    isVeg: true,
    category: "fries",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503071926574990_482x264jpg",
    price: 149
  },
  {
    id: 13,
    name: "French Fries",
    desc: "Golden crispy french fries with seasoning",
    isVeg: true,
    category: "fries",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503071926574990_482x264jpg",
    price: 99
  },
  {
    id: 14,
    name: "Sprite(M)",
    desc: "Sprite 300ml served in a tall glass",
    isVeg: true,
    category: "drinks",
    img: "https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20250503135511353577_482x264jpg",
    price: 69
  }
];

// (async()=>{
//     try{
//         await sequelize.sync();
//         await Product.bulkCreate(product);
//         console.log('Products table seeded successfully.');
//         process.exit();
//     }catch(err){
//         console.error('Error seding products: ',err);
//         process.exit(1);
//     }
// })();