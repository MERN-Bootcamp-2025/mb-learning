const express = require('express');
const path = require('path');
const router = express.Router();

//inmemory array to hold products
const products = [];

router.get('/', (req, res, next) => {
    // res.send(`
    //     <h1>Welcome to the Shop</h1>
    //     <p><a href="/add-product">Add Product</a></p>
    //     <p><a href="/show-products">Show All Products</a></p>
    //     `);
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/show-products', (req, res, next) => {
    let listItems = products.map(p => `<li>${p}</li>`).join('');
    res.send(`
        <nav><a href='/'>Home</a>
        <a href="/add-product">Add Products</a>
        </nav>
        <h1>Product List</h1>
        <ul>${listItems}</ul>
        
        `)
})

module.exports = router;
module.exports.products = products;