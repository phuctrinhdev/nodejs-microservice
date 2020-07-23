'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('tbl_product', 'vivino_reviews', {
      type: Sequelize.ARRAY({ type: Sequelize.JSONB })
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('tbl_product', 'vivino_reviews');
  }
};