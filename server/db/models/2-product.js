'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ BasketProduct }) {
      this.hasMany(BasketProduct, { foreignKey: 'productId' });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    img: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};