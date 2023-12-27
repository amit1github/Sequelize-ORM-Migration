"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn("orders", "newField3", {
      type: Sequelize.STRING, // Replace with the appropriate data type
    });

    await queryInterface.addColumn("orders", "newField5", {
      type: Sequelize.BOOLEAN, // Example of another data type
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn("orders", "newField3");
    await queryInterface.removeColumn("orders", "newField5");
  },
};
