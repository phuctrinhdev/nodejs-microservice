'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'displayed_price', {
      type: Sequelize.DOUBLE(11),
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    })
    return await queryInterface.changeColumn('tbl_product', 'price', {
      type: Sequelize.DOUBLE(11),
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    })
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.changeColumn('tbl_product', 'displayed_price', {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    })
    return await queryInterface.changeColumn('tbl_product', 'price', {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    })
  }
};