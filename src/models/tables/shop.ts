import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const Shop = sequelize.define(
  'tbl_shop',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    rating: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      }
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price_everage: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    crawled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    maybe_duplicate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING
    },
    working_hours: {
      type: Sequelize.ARRAY({ type: Sequelize.STRING })
    },
    editable: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    not_in_use: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    displayed_name: {
      type: Sequelize.STRING
    },
    displayed_picture: {
      type: Sequelize.STRING
    },
    displayed_rating: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      }
    },
    displayed_price_everage: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    displayed_address: {
      type: Sequelize.STRING
    },
    displayed_working_hours: {
      type: Sequelize.ARRAY({ type: Sequelize.STRING })
    },
    displayed_not_in_use: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    displayed_link: {
      type: Sequelize.STRING
    },
    schedule_update: {
      type: Sequelize.BIGINT,
      defaultValue: 0
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
