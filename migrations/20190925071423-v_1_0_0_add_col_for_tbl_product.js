'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'displayed_vivino_wine_type', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_vivino_winery', {
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('tbl_product', 'displayed_vivino_style', {
      type: Sequelize.STRING
    });
    return await queryInterface.addColumn('tbl_product', 'displayed_vivino_region', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'displayed_vivino_wine_type');
    await queryInterface.removeColumn('tbl_product', 'displayed_vivino_winery');
    await queryInterface.removeColumn('tbl_product', 'displayed_vivino_style');
    return await queryInterface.removeColumn('tbl_product', 'displayed_vivino_region');
  }
};