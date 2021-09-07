'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.createTable('cpp', {
         id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          },
          email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false, 
          },
          password: {
            type: Sequelize.INTEGER,
            allowNull: false
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
  }
};
