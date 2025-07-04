const sequelize = require('../util/database');
const { DataTypes } = require('sequelize');

const Meal = sequelize.define('Meal',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
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
    img: DataTypes.STRING
});

module.exports= Meal;