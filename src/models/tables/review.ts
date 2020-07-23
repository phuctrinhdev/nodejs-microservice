import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const Review = sequelize.define(
  'tbl_review',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    product_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_product',
        key: 'id'
      }
    },
    vivino_id: {
      type: Sequelize.INTEGER,
    },
    content: {
      type: Sequelize.TEXT,
    },
    content_vn: {
      type: Sequelize.TEXT,
    },
    language: {
      type: Sequelize.STRING,
    },
    user: {
      type: Sequelize.JSONB
    },
    rating: {
      type: Sequelize.DOUBLE
    },
    vivino_created_at: {
      type: 'TIMESTAMP'
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
