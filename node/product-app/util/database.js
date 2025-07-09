// const { Sequelize } = require('sequelize');
// const config = require('../config')

// const sequelize = new Sequelize(
//     config.development.database,
//     config.development.username,
//     config.development.password,
//     {
//         host: config.development.host,
//         port: config.development.port,
//         dialect: config.development.dialect
//     }
// )

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const uri =
  "mongodb+srv://arzoojain:C62XkeO01VxbAfDl@cluster1.q2vgonx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const client = new MongoClient(uri);
let _db; //variable to store the connected database object

const mongoConnect = () => {
  return client
    .connect() //attemptes to connect to MongoDB
    .then((client) => {
      _db = client.db("product-app");
      console.log("Connected to MongoDB!");
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  // this fucntion allows other parts of your app to get the connected database object once it's initialized
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

module.exports= {mongoConnect,getDb};
