import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const Tag = sequelize.define(
  'tbl_tag',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
    },
    name_vn: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
      validate: {
        isIn: [
          ['MEAL', 'OCCASION']
        ]
      },
      defaultValue: null
    },
    foods: {
      type: Sequelize.ARRAY(Sequelize.TEXT) 
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
