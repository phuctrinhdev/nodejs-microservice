'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_review', 'content', {
      type: Sequelize.TEXT
    })
    return await queryInterface.changeColumn('tbl_review', 'content_vn', {
      type: Sequelize.TEXT
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_review', 'content', {
      type: Sequelize.STRING
    })
    return await queryInterface.changeColumn('tbl_review', 'content_vn', {
      type: Sequelize.STRING
    })
  }
};