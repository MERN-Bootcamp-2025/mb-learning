const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('Product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        // defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    isVeg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    category: {
        type: DataTypes.ENUM('Burgers','Coke','Fries'),
        allowNull: false
    },
    img: DataTypes.STRING
});

module.exports = Product;