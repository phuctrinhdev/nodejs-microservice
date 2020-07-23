import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const PriceHistory = sequelize.define(
  'tbl_price_history',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    product_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_product',
        key: 'id'
      }
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    updated_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    },
    deleted_at: { type: 'TIMESTAMP' }
  },
  {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['deleted_at'] }
    },
    scopes: {
      deleted: {
        where: { deleted_at: { $ne: null } },
        paranoid: false
      }
    }
  }
)
