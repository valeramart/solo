'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate( { Product, User } ) {
      this.belongsTo(Product, { foreignKey: 'productId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Basket.init({
    productId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};