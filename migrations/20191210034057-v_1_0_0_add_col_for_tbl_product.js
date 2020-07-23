'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'food_contains', {
      type: Sequelize.ARRAY(Sequelize.TEXT) 
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'food_contains');
  }
};