'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'vivino_wine_type', {
      type: Sequelize.JSONB
    });
    await queryInterface.addColumn('tbl_product', 'vivino_winery', {
      type: Sequelize.JSONB
    });
    await queryInterface.addColumn('tbl_product', 'vivino_style', {
      type: Sequelize.JSONB
    });
    return await queryInterface.addColumn('tbl_product', 'vivino_region', {
      type: Sequelize.JSONB
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'vivino_wine_type');
    await queryInterface.removeColumn('tbl_product', 'vivino_winery');
    await queryInterface.removeColumn('tbl_product', 'vivino_style');
    return await queryInterface.removeColumn('tbl_product', 'vivino_region');
  }
};