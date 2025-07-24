const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');

//Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));

//Routes
app.get('/',(req,res)=>{
    res.send("Reading List API is running");
});

app.use('/auth',authRoutes);
app.use('/books',bookRoutes);

app.use(errorHandler);//last middleware

module.exports = app;