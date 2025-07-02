const express = require("express");
const PORT = 3000;
const app = express();

const cors = require("cors");
app.use(cors());

// const sequelize = require("./util/database");
// const Product = require("./models/product");

const mongoConnect = require("./util/database");

app.use(express.json()); //Middleware to parse JSON bodies

//Routes
// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

//Routing
// app.use("/admin", adminRoutes);
// app.use("/shop", shopRoutes);

//404Page
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

mongoConnect((client) => {
//   console.log(client);
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

// sequelize.sync().then(() => {
//   console.log("DB synced");
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// }).catch(err => console.log('DB sync error: ',err));
