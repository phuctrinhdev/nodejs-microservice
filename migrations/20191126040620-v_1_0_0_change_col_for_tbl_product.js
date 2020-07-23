'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_winery', {
      type: Sequelize.TEXT
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_style', {
      type: Sequelize.TEXT
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_region', {
      type: Sequelize.TEXT
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_wine_type', {
      type: Sequelize.TEXT
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_food', {
      type: Sequelize.TEXT
    })
    return await queryInterface.changeColumn('tbl_product', 'displayed_vivino_grape', {
      type: Sequelize.TEXT
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_winery', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_style', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_region', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_wine_type', {
      type: Sequelize.STRING
    })
    await queryInterface.changeColumn('tbl_product', 'displayed_vivino_food', {
      type: Sequelize.STRING
    })
    return await queryInterface.changeColumn('tbl_product', 'displayed_vivino_grape', {
      type: Sequelize.STRING
    })
  }
};