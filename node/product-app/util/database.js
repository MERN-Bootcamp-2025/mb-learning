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

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://arzoojain:C62XkeO01VxbAfDl@cluster1.q2vgonx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
    .then((client) => {
      console.log("Connected!");
      // callback(client)
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No database found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
