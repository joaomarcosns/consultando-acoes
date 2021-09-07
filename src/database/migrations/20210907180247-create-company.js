'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('companies', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        company_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        latest_price: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        marketCap: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        symbol: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        weekHigh: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        weekLow: {
          type: Sequelize.FLOAT,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('company');
  }
};
