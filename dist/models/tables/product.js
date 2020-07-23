"use strict";

var cov_eu9apmb5t = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/product.js",
        hash = "e02d1da6d44de7800dc5cd5142f930c07c417683",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/product.js",
        statementMap: {
            "0": {
                start: {
                    line: 2,
                    column: 0
                },
                end: {
                    line: 2,
                    column: 62
                }
            },
            "1": {
                start: {
                    line: 3,
                    column: 15
                },
                end: {
                    line: 3,
                    column: 33
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 15
                },
                end: {
                    line: 4,
                    column: 32
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 25
                },
                end: {
                    line: 5,
                    column: 43
                }
            },
            "4": {
                start: {
                    line: 6,
                    column: 0
                },
                end: {
                    line: 243,
                    column: 3
                }
            },
            "5": {
                start: {
                    line: 223,
                    column: 12
                },
                end: {
                    line: 223,
                    column: 65
                }
            },
            "6": {
                start: {
                    line: 224,
                    column: 12
                },
                end: {
                    line: 224,
                    column: 65
                }
            },
            "7": {
                start: {
                    line: 227,
                    column: 12
                },
                end: {
                    line: 227,
                    column: 65
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 222,
                        column: 22
                    },
                    end: {
                        line: 222,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 222,
                        column: 33
                    },
                    end: {
                        line: 225,
                        column: 9
                    }
                },
                line: 222
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 226,
                        column: 22
                    },
                    end: {
                        line: 226,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 226,
                        column: 33
                    },
                    end: {
                        line: 228,
                        column: 9
                    }
                },
                line: 226
            }
        },
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0
        },
        f: {
            "0": 0,
            "1": 0
        },
        b: {},
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

cov_eu9apmb5t.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_eu9apmb5t.s[1]++, require("../base"));
var moment = (cov_eu9apmb5t.s[2]++, require("moment"));
var unix_timestamp_now = (cov_eu9apmb5t.s[3]++, moment().valueOf());
cov_eu9apmb5t.s[4]++;
exports.Product = base_1.sequelize.define('tbl_product', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    shop_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_shop',
            key: 'id'
        }
    },
    country_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_country',
            key: 'id'
        }
    },
    name: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    type: {
        type: base_1.Sequelize.STRING
    },
    picture: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    country: {
        type: base_1.Sequelize.STRING
    },
    rating: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    },
    link: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: base_1.Sequelize.DOUBLE(11),
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    maybe_duplicate: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    editable: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    not_in_use: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    reviews: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    },
    unit_price: {
        type: base_1.Sequelize.STRING
    },
    crawl_from: {
        type: base_1.Sequelize.STRING,
        validate: {
            isIn: [['NOW', 'VIVINO']]
        },
        defaultValue: 'NOW'
    },
    displayed_name: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    displayed_picture: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    displayed_country: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    displayed_rating: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    },
    displayed_link: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    displayed_not_in_use: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    displayed_reviews: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    },
    displayed_unit_price: {
        type: base_1.Sequelize.STRING
    },
    displayed_price: {
        type: base_1.Sequelize.DOUBLE(11),
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    vivino_id: {
        type: base_1.Sequelize.BIGINT(11),
        defaultValue: 0
    },
    vivino_image: {
        type: base_1.Sequelize.JSONB
    },
    vivino_wine_id: {
        type: base_1.Sequelize.BIGINT(11),
        defaultValue: 0
    },
    vivino_year: {
        type: base_1.Sequelize.STRING,
        defaultValue: 0
    },
    vivino_winery: {
        type: base_1.Sequelize.JSONB
    },
    vivino_style: {
        type: base_1.Sequelize.JSONB
    },
    vivino_region: {
        type: base_1.Sequelize.JSONB
    },
    vivino_wine_type: {
        type: base_1.Sequelize.JSONB
    },
    displayed_vivino_winery: {
        type: base_1.Sequelize.STRING
    },
    displayed_vivino_style: {
        type: base_1.Sequelize.STRING
    },
    displayed_vivino_region: {
        type: base_1.Sequelize.STRING
    },
    displayed_vivino_wine_type: {
        type: base_1.Sequelize.STRING
    },
    displayed_vivino_food: {
        type: base_1.Sequelize.STRING
    },
    displayed_vivino_grape: {
        type: base_1.Sequelize.STRING
    },
    vivino_reviews: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.JSONB })
    },
    vivino_foods: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.JSONB })
    },
    vivino_grapes: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.JSONB })
    },
    vivino_wine_type_id: {
        type: base_1.Sequelize.BIGINT(11),
        defaultValue: 0
    },
    featured: {
        type: base_1.Sequelize.ENUM,
        values: ['NO', 'DAILY_DRINKS', 'EXTRAORDINARIES'],
        defaultValue: 'NO'
    },
    alcohol: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0
    },
    vivino_url: {
        type: base_1.Sequelize.TEXT
    },
    slug: {
        type: base_1.Sequelize.TEXT
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: base_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    deleted_at: { type: 'TIMESTAMP' }
}, {
    hooks: {
        beforeCreate: function beforeCreate(model) {
            cov_eu9apmb5t.f[0]++;
            cov_eu9apmb5t.s[5]++;

            model.created_at_unix_timestamp = unix_timestamp_now;
            cov_eu9apmb5t.s[6]++;
            model.updated_at_unix_timestamp = unix_timestamp_now;
        },
        beforeUpdate: function beforeUpdate(model) {
            cov_eu9apmb5t.f[1]++;
            cov_eu9apmb5t.s[7]++;

            model.updated_at_unix_timestamp = moment().valueOf();
        }
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
});
//# sourceMappingURL=product.js.map
//# sourceMappingURL=product.js.map