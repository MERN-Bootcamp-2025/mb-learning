const Product = require("../models/product");

exports.addProduct = (req, res) =>{
    const {title} = req.body;

    const product = new Product(title);

    product.save()
    .then(result => {
        res.status(201).json({
            message: 'Product added successfully',
            productId: result.insertedId,
        });
    })
    .catch(err=>{
        console.error('Error saving product: ',err);
        res.status(500).json({message: 'Failed to add product'});
        
    })
}