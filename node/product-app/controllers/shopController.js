const Product = require("../models/product")

exports.getAllProducts = (req,res)=>{
    Product.fetchAll()
    .then(products => {
        res.status(200).json(products);
    })
    .catch(err => {
        console.error("Failed to fetch products", err);
        res.status(500).json({message: "Failed to fetch products"});
    })
}