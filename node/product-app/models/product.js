// const {DataTypes} = require('sequelize');
// const sequelize = require('../util/database');

const {getDb} = require('../util/database');
class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        const db = getDb();
        return db.collection('products').insertOne({title: this.title})
    }
    static fetchAll(){
        const db = getDb();
        return db.collection('products').find().toArray();//this returns a promise
    }
}

// const Product = sequelize.define('Product',{
//     id:{
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey:true
//     },
//     title:{
//         type: DataTypes.STRING,
//         allowNull:false
//     }
// });

module.exports = Product;
