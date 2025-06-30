const express = require('express');
const app = express();
const path = require('path');

const shopRoutes = require('./routes/shop');
const productRoutes = require('./routes/product')

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = 3000;

app.use('/',shopRoutes);
app.use('/add-product',productRoutes);

app.listen(3000,()=>{
    console.log(`Server is running on port ${PORT}`);
});