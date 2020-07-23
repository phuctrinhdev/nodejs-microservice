'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'crawl_from', {
      type: Sequelize.STRING,
      validate: {
        isIn: [
          ['NOW', 'VIVINO']
        ]
      },
      defaultValue: 'NOW'
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'crawl_from');
  }
};