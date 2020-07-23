import {
  sequelize,
  Sequelize
} from '../base'
import moment = require('moment');
var unix_timestamp_now = moment().valueOf();

export const Product = sequelize.define(
  'tbl_product',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true
    },
    shop_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_shop',
        key: 'id'
      }
    },
    country_id: {
      type: Sequelize.UUID,
      references: {
        model: 'tbl_country',
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    type: {
      type: Sequelize.STRING,
      // validate: {
      //   isIn: [
      //     [
      //     ]
      //   ]
      // }
    },
    picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING
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
    price: {
      type: Sequelize.DOUBLE(11),
      defaultValue: 0,
      validate: {
        min: 0
      },
      allowNull: false
    },
    maybe_duplicate: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    editable: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    not_in_use: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    reviews: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0
      }
    },
    unit_price: {
      type: Sequelize.STRING,
    },
    crawl_from: {
      type: Sequelize.STRING,
      validate: {
        isIn: [
          ['NOW', 'VIVINO']
        ]
      },
      defaultValue: 'NOW'
    },
    displayed_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    displayed_picture: {
      type: Sequelize.STRING,
      allowNull: true
    },
    displayed_country: {
      type: Sequelize.STRING,
      allowNull: true
    },
    displayed_rating: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0,
      }
    },
    displayed_link: {
      type: Sequelize.STRING,
      allowNull: true
    },
    displayed_not_in_use: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    displayed_reviews: {
      type: Sequelize.DOUBLE,
      validate: {
        min: 0
      }
    },
    displayed_unit_price: {
      type: Sequelize.STRING,
    },
    displayed_price: {
      type: Sequelize.DOUBLE(11),
      defaultValue: 0,
      validate: {
        min: 0
      }
    },
    vivino_id: {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    },
    vivino_image: {
      type: Sequelize.JSONB
    },
    vivino_wine_id: {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    },
    vivino_year: {
      type: Sequelize.STRING,
      defaultValue: 0
    },
    vivino_winery: {
      type: Sequelize.JSONB
    },
    vivino_style: {
      type: Sequelize.JSONB
    },
    vivino_region: {
      type: Sequelize.JSONB
    },
    vivino_wine_type: {
      type: Sequelize.JSONB
    },
    displayed_vivino_winery: {
      type: Sequelize.TEXT
    },
    displayed_vivino_style: {
      type: Sequelize.TEXT
    },
    displayed_vivino_region: {
      type: Sequelize.TEXT
    },
    displayed_vivino_wine_type: {
      type: Sequelize.TEXT
    },
    displayed_vivino_food: {
      type: Sequelize.TEXT
    },
    displayed_vivino_grape: {
      type: Sequelize.TEXT
    },
    vivino_reviews: {
      type: Sequelize.ARRAY({ type: Sequelize.JSONB })
    },
    vivino_foods: {
      type: Sequelize.ARRAY({ type: Sequelize.JSONB })
    },
    vivino_grapes: {
      type: Sequelize.ARRAY({ type: Sequelize.JSONB })
    },
    vivino_wine_type_id: {
      type: Sequelize.BIGINT(11),
      defaultValue: 0
    },
    featured: {
      type: Sequelize.ENUM,
      values: ['NO', 'DAILY_DRINKS', 'EXTRAORDINARIES'],
      defaultValue: 'NO'
    },
    alcohol: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
    vivino_url: {
      type: Sequelize.TEXT
    },
    slug: {
      type: Sequelize.TEXT
    },
    picture_upload: {
      type: Sequelize.TEXT
    },
    amount_shop_sell: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    priority: {
      type: Sequelize.INTEGER,
      defaultValue: 999999
    },
    all_shop_not_in_use: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    food_contains: {
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
