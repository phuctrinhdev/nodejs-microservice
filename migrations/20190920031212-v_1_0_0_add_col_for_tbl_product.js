'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('tbl_product', 'vivino_id', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
    await queryInterface.addColumn('tbl_product', 'vivino_image', {
      type: Sequelize.JSONB
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('tbl_product', 'vivino_id');
    await queryInterface.removeColumn('tbl_product', 'vivino_image');
  }
};