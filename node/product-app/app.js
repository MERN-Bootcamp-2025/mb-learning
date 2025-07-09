const express = require("express");
const PORT = 3000;
const app = express();

const cors = require("cors");

const {mongoConnect} = require("./util/database");

// const sequelize = require("./util/database");
// const Product = require("./models/product");

//Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(cors());
app.use(express.json()); //Middleware to parse JSON bodies


//Routing
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);


app.use((req, res, next) => {//404Page
  res.status(404).json({ error: "Route not found" });
});

mongoConnect().then(()=>{
    app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))
}).catch(err => console.log('Could not start server: ',err));

// sequelize.sync().then(() => {
//   console.log("DB synced");
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// }).catch(err => console.log('DB sync error: ',err));
