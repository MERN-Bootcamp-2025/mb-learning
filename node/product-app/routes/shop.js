const express = require('express');
const router = express.Router();
const Product = require('../models/product')

//GET
router.get('/products',async (req,res)=>{
    try{
        const products = await Product.findAll();
        res.json({products});
    }catch(err){
        res.status(500).json({error: 'Failed to fetch products'});

    }
})

module.exports = router;