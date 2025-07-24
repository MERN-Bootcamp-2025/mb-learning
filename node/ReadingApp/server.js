const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

//connect to mongodb
connectDB();

//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});