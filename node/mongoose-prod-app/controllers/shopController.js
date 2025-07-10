const Products = require("../models/Products");

exports.getAllProducts = (req, res) => {
  Products.find()
    .then(products => {
      res.status(200).json({
        message: "Products fetched successfully",
        data: products,
      });
    })
    .catch((err) => {
      console.error("Error occured while fetching", err);

      res.status(500).json({
        message: "Internal Server error"
      });
    });
};

exports.getProductById = (req, res)=>{
    const productId = req.params.id;

    Products.findById(productId)
    .then(products => {
        res.status(200).json({
            message: "Products fetched successfully",
            data: products
        });
    })
    .catch(err => {
        console.error("Error occured while fetching",err);

        res.status(500).json({
            message:"Internal Server error occured"
        })      
    });
};