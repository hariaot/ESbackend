"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("students", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usp_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      lattes_url: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      lattes_mddate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      id_advisor: {
        type: Sequelize.INTEGER,
        references: { model: "advisors", key: "id" },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
