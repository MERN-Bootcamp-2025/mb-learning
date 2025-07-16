require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const connectDB = require("./util/db");
const productRoute = require('./routes/productRoute');
const shopRoute = require('./routes/shopRoutes');
const emailRoute = require('./routes/emailRoute')

connectDB();

app.use(express.json());

app.use('/products',productRoute);
app.use('/shop',shopRoute);

app.use('/email',emailRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
