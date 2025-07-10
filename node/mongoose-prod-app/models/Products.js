const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        minLength: 3,
        trim:true
    },
    price:{
        type:Number,
        required: true,
        min: [0, 'Price should be positive']
    },
    isVeg:{
        type: Boolean,
        default: true
    }
},{
    timestamps: true
});

const Products = mongoose.model('Products',productSchema);

module.exports = Products;