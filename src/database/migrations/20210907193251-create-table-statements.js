"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("statements", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      id_student: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_advisor: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      adv_comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adv_statement: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpp_comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpp_statement: {
        type: Sequelize.STRING,
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
      id_report: {
        type: Sequelize.INTEGER,
        references: { model: "reports", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
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
