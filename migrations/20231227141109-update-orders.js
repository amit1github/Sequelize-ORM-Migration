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
    await queryInterface.addColumn("orders", "newField1", {
      type: Sequelize.STRING, // Replace with the appropriate data type
    });

    await queryInterface.addColumn("orders", "newField2", {
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
    await queryInterface.removeColumn("orders", "newField1");
    await queryInterface.removeColumn("orders", "newField2");
  },
};
