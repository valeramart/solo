'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Product }) {
      this.hasMany(Product, { foreignKey: 'userId' });
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    hashpass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};