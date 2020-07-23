'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'priority', {
      type: Sequelize.INTEGER,
      defaultValue: 999999
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'priority');
  }
};