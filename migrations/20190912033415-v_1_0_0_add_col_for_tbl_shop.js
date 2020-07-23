'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_shop', 'working_hours', {
      type: Sequelize.ARRAY({ type: Sequelize.STRING })
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_shop', 'working_hours');
  }
};