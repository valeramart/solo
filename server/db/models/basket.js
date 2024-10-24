'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate( {User, BasketProduct} ) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(BasketProduct, { foreignKey: 'basketId' }); 
    }
  }
  Basket.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};