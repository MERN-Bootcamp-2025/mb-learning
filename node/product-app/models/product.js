const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

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

module.exports = Product;
