'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'vivino_wine_id', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    return await queryInterface.addColumn('tbl_product', 'vivino_year', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'vivino_wine_id');
    return await queryInterface.removeColumn('tbl_product', 'vivino_year');
  }
};