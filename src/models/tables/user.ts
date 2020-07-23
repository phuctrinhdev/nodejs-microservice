import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const User = sequelize.define(
  'tbl_user',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING
    },
    fullname: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
      allowNull: false
    },
    sex: {
      type: Sequelize.STRING,
      validate: {
        isIn: [
          [
            'MALE',
            'FEMALE'
          ]
        ]
      }
    },
    locale: {
      type: Sequelize.STRING
    },
    login_type: {
      type: Sequelize.STRING,
      validate: {
        isIn: [
          [
            'FACEBOOK',
            'GOOGLE'
          ]
        ]
      },
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    created_at_unix_timestamp: {
      type: Sequelize.BIGINT,
      validate: {
        min: 0,
      },
      defaultValue: 0
    },
    updated_at_unix_timestamp: {
      type: Sequelize.BIGINT,
      validate: {
        min: 0,
      },
      defaultValue: 0
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
    hooks: {
      beforeCreate: (model: any) => {
        model.created_at_unix_timestamp = unix_timestamp_now
        model.updated_at_unix_timestamp = unix_timestamp_now
      },
      beforeUpdate: (model: any) => {
        model.updated_at_unix_timestamp = moment().valueOf()
      },
    },
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
