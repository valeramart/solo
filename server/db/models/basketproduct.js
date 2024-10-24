'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BasketProduct extends Model {
    static associate({ Basket, Product }) {
      this.belongsTo(Basket, { foreignKey: 'basketId' });
      this.belongsTo(Product, { foreignKey: 'productId' });
    }
  }
  BasketProduct.init({
    productId: DataTypes.INTEGER,
    basketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BasketProduct',
  });
  return BasketProduct;
};