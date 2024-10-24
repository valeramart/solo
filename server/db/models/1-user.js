'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Basket }) {
      this.hasOne(Basket, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    hashpass: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};