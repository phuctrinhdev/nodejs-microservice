'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'displayed_vivino_food', {
      type: Sequelize.STRING
    });
    return await queryInterface.addColumn('tbl_product', 'displayed_vivino_grape', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'displayed_vivino_food');
    return await queryInterface.removeColumn('tbl_product', 'displayed_vivino_grape');
  }
};