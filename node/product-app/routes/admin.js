const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//POST
router.post('/product',async (req,res)=>{
    try{
        const product = await Product.create({title: req.body.title});
        res.status(201).json({message: "Product added",product});
    }catch(err){
        res.status(500).json({error: 'Failed to add product', details: err.message});
    }
})

//PUT
router.put('/product/:id',async (req,res)=>{
    try{
        const product = await Product.findByPk(req.params.id);
        if(!product) return res.status(404).json({error: 'Product not found'});

        product.title = req.body.title;
        await product.save();
        res.json({message: 'Product updated', product});

    }catch(err){
        res.status(500).json({error: 'Update Failed', details: err.message})
    }
})

//DELETE
router.delete('/product/:id',async(req,res)=>{
    try{
        const rowsDeleted = await Product.destroy({where: {id: req.params.id}});
        if(!rowsDeleted) return res.status(404).json({error: 'Product not found'});

        res.json({message: "Product deleted"})

    }catch(err){
        res.status(500).json({error: 'Delete failed', details: err.message});
    }
})

module.exports = router;