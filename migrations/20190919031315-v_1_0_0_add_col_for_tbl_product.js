'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'displayed_name', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_picture', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_country', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_rating', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      }
    });
    await queryInterface.addColumn('tbl_product', 'displayed_link', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_not_in_use', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    await queryInterface.addColumn('tbl_product', 'displayed_reviews', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0
      }
    });
    return await queryInterface.addColumn('tbl_product', 'displayed_unit_price', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'displayed_name');
    await queryInterface.removeColumn('tbl_product', 'displayed_picture');
    await queryInterface.removeColumn('tbl_product', 'displayed_country');
    await queryInterface.removeColumn('tbl_product', 'displayed_rating');
    await queryInterface.removeColumn('tbl_product', 'displayed_link');
    await queryInterface.removeColumn('tbl_product', 'displayed_not_in_use');
    await queryInterface.removeColumn('tbl_product', 'displayed_reviews');
    return await queryInterface.removeColumn('tbl_product', 'displayed_unit_price');
  }
};