// const {DataTypes} = require('sequelize');
// const sequelize = require('../util/database');

const getDb = require('../util/database').getDb;
class Product{
    constructor(title){
        this.title = title;
    }
    save(){
        // const db = getDb();
        // db.collection();

    }
}

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    }
});

// module.exports = Product;
