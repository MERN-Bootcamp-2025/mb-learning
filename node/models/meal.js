const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Meal = sequelize.define('Meal',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        // defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    isVeg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    desc: DataTypes.STRING,
    img: DataTypes.STRING
});

module.exports= Meal;