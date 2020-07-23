'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'vivino_id', {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_product', 'vivino_wine_id', {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    })
    return await queryInterface.changeColumn('tbl_product', 'vivino_wine_type_id', {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'vivino_id', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
    await queryInterface.changeColumn('tbl_product', 'vivino_wine_id', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
    return await queryInterface.changeColumn('tbl_product', 'vivino_wine_type_id', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
  }
};