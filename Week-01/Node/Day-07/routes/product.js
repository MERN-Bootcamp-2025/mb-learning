const express = require('express');
const path = require('path')
const { products } = require('./shop');
const app = express();
const router = express.Router();

router.get('/', (req, res, next) => {
//     res.send(`
//     <h1>Add a Product</h1>
//     <form action="/add-product" method="POST">
//       <input type="text" name="product" required />
//       <button type="submit">Add Product</button>
//     </form>
//     <p><a href="/">Home</a></p>
//   `);
res.sendFile(path.join(__dirname,'../views/add-product.html'))
})

router.post('/',(req,res,next)=>{
    const newProd = req.body.product;
    products.push(newProd);
    res.redirect('/show-products');
})

module.exports = router;