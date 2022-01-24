"use strict";
const faker = require("faker/");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    const items = generateFakerItems(20);
    await queryInterface.bulkInsert("users", items, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
  },
};

function generateFakerItems(rowCount) {
  const data = [];
  for (let i = 0; i < rowCount; i++) {
    const newItems = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: "09090909",
      gender: "pria",
      status: "active",
      createAt: new Date(),
      updateAt: new Date(),
    };
    data.push(newItems);
  }
  return data;
}
