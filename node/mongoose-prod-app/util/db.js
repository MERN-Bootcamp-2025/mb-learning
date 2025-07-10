const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = ()=>{
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(()=>console.log('MongoDB connected'))
    .catch((err)=> console.error('DB connection error',err)
    );
};

module.exports = connectDB;