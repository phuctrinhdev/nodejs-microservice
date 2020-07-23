'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'displayed_price', {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'displayed_price');
  }
};