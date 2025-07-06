const express = require('express');
const {sequelize} = require('./models');
const { json } = require('sequelize');
const config = require('./config');
const logger = require('./middleware/logger');
const productRoute = require('./routes/productRoute');
const mealRoute = require('./routes/mealRoute');
const mealsProductRoute = require('./routes/mealsProductRoute');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const PORT = 3000;

//built-in middleware
app.use(express.json());

//custom logger middleware
app.use(logger);

//Product routes
app.use('/products',productRoute);
app.use('/meals',mealRoute);
app.use('/mealsProduct',mealsProductRoute);

//Error handler
app.use(errorHandler);

sequelize.sync().then(()=>{
    console.log('Database Connected!');
    app.listen(PORT,()=>{
        console.log(`Server is running on port: ${PORT}`)
    })
}).catch(err=>console.error(`Error occured, ${err}`));