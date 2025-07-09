const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
        // defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    isVeg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    category: {
        type: DataTypes.ENUM('burgers','drinks','fries'),
        allowNull: false
    },
    img: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
});

module.exports = Product;