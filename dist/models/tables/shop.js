"use strict";

var cov_1qheppmf46 = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/shop.js",
        hash = "e8717d6b7e5285916a71d7665d3210c946929383",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/shop.js",
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
                    line: 124,
                    column: 3
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        },
        f: {},
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

cov_1qheppmf46.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1qheppmf46.s[1]++, require("../base"));
var moment = (cov_1qheppmf46.s[2]++, require("moment"));
var unix_timestamp_now = (cov_1qheppmf46.s[3]++, moment().valueOf());
cov_1qheppmf46.s[4]++;
exports.Shop = base_1.sequelize.define('tbl_shop', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    name: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: base_1.Sequelize.STRING,
        allowNull: true
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
    price_everage: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        },
        allowNull: false
    },
    crawled: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    maybe_duplicate: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    address: {
        type: base_1.Sequelize.STRING
    },
    working_hours: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.STRING })
    },
    editable: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    not_in_use: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    displayed_name: {
        type: base_1.Sequelize.STRING
    },
    displayed_picture: {
        type: base_1.Sequelize.STRING
    },
    displayed_rating: {
        type: base_1.Sequelize.DOUBLE,
        validate: {
            min: 0
        }
    },
    displayed_price_everage: {
        type: base_1.Sequelize.DOUBLE,
        defaultValue: 0,
        validate: {
            min: 0
        }
    },
    displayed_address: {
        type: base_1.Sequelize.STRING
    },
    displayed_working_hours: {
        type: base_1.Sequelize.ARRAY({ type: base_1.Sequelize.STRING })
    },
    displayed_not_in_use: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
    },
    displayed_link: {
        type: base_1.Sequelize.STRING
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
//# sourceMappingURL=shop.js.map
//# sourceMappingURL=shop.js.map