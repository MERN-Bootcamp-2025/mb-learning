const {DataTypes} = require('sequelize')
const sequelize = require('../util/database')

const MealsProduct = sequelize.define('MealsProduct',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    meal_id:{
        type:DataTypes.INTEGER
    },
    prod_id:{
        type: DataTypes.INTEGER
    },
    quantity: DataTypes.INTEGER
});

module.exports = MealsProduct;