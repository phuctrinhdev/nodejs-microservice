'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_shop', 'editable', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
    return await queryInterface.addColumn('tbl_shop', 'not_in_use', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_shop', 'editable');
    return await queryInterface.removeColumn('tbl_shop', 'not_in_use');
  }
};