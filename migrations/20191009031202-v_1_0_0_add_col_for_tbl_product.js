'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'country_id', {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_country',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'country_id');
  }
};