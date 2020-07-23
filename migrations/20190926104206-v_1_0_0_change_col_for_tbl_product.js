'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return await queryInterface.changeColumn('tbl_product', 'vivino_year', {
      type: Sequelize.STRING
    })
  },

  down: async function (queryInterface, Sequelize) {
    return await queryInterface.changeColumn('tbl_product', 'vivino_year', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    })
  }
};