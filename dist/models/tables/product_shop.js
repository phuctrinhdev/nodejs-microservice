"use strict";

var cov_9yk6qmywb = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/product_shop.js",
        hash = "5b75eec9b087d108da5511280fe8557842dc481d",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/product_shop.js",
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
                    line: 60,
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

cov_9yk6qmywb.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_9yk6qmywb.s[1]++, require("../base"));
var moment = (cov_9yk6qmywb.s[2]++, require("moment"));
var unix_timestamp_now = (cov_9yk6qmywb.s[3]++, moment().valueOf());
cov_9yk6qmywb.s[4]++;
exports.ProductShop = base_1.sequelize.define('tbl_product_shop', {
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
    product_id: {
        type: base_1.Sequelize.UUID,
        references: {
            model: 'tbl_product',
            key: 'id'
        }
    },
    not_in_use: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: false
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
//# sourceMappingURL=product_shop.js.map
//# sourceMappingURL=product_shop.js.map