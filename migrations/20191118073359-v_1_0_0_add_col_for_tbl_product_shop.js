'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product_shop', 'name_in_the_shop', {
      type: Sequelize.TEXT
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product_shop', 'name_in_the_shop');
  }
};