'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'editable', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    await queryInterface.addColumn('tbl_product', 'not_in_use', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    await queryInterface.addColumn('tbl_product', 'unit_price', {
      type: Sequelize.STRING
    });
    return await queryInterface.addColumn('tbl_product', 'reviews', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'editable');
    await queryInterface.removeColumn('tbl_product', 'not_in_use');
    await queryInterface.removeColumn('tbl_product', 'unit_price');
    return await queryInterface.removeColumn('tbl_product', 'reviews');
  }
};