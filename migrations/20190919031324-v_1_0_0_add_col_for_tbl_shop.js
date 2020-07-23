'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_shop', 'displayed_name', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_shop', 'displayed_picture', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_shop', 'displayed_rating', {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      }
    });
    await queryInterface.addColumn('tbl_shop', 'displayed_price_everage', {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      }
    });
    await queryInterface.addColumn('tbl_shop', 'displayed_address', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_shop', 'displayed_working_hours', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING })
    });
    return await queryInterface.addColumn('tbl_shop', 'displayed_not_in_use', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_shop', 'displayed_name');
    await queryInterface.removeColumn('tbl_shop', 'displayed_picture');
    await queryInterface.removeColumn('tbl_shop', 'displayed_rating');
    await queryInterface.removeColumn('tbl_shop', 'displayed_price_everage');
    await queryInterface.removeColumn('tbl_shop', 'displayed_address');
    await queryInterface.removeColumn('tbl_shop', 'displayed_working_hours');
    return await queryInterface.removeColumn('tbl_shop', 'displayed_not_in_use');
  }
};