'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_shop', 'schedule_update', {
      type: Sequelize.BIGINT,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_shop', 'schedule_update');
  }
};