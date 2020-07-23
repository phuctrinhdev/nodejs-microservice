'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product_shop', 'price', {
      type: Sequelize.DOUBLE(11),
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product_shop', 'price');
  }
};