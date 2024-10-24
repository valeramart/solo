"use strict";
const { hashSync } = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "123@123",
          name: "Валерия",
          hashpass: hashSync("123", 10),
          role: "ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "111@111",
          name: "Эльбрус",
          hashpass: hashSync("111", 10),
          role: "USER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
