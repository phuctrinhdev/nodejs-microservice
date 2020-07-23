'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'featured', {
      type: Sequelize.ENUM,
      values: ['NO', 'DAILY_DRINKS', 'EXTRAORDINARIES'],
      defaultValue: 'NO'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'featured');
  }
};