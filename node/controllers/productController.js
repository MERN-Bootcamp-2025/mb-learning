const {Product} = require('../models');

exports.getAllProducts = (req,res,next)=>{
    Product.findAll()
    .then(products=>{
        res.json(products);
    })
    .catch(err =>{
        err.status = 500;
        next(err); // send to error handler
    })
}