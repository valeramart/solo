'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Basket }) {
      this.hasOne(Basket, { foreignKey: 'productId' });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    img: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};