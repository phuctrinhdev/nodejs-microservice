"use strict";

var cov_1r17mrjg4 = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/associates.js",
        hash = "ef4c18d19c7c1cacbf532b82f0846e68eff4c00a",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/associates.js",
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
                    column: 17
                },
                end: {
                    line: 3,
                    column: 43
                }
            },
            "2": {
                start: {
                    line: 5,
                    column: 0
                },
                end: {
                    line: 8,
                    column: 3
                }
            },
            "3": {
                start: {
                    line: 9,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 3
                }
            },
            "4": {
                start: {
                    line: 13,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 3
                }
            },
            "5": {
                start: {
                    line: 17,
                    column: 0
                },
                end: {
                    line: 20,
                    column: 3
                }
            },
            "6": {
                start: {
                    line: 22,
                    column: 0
                },
                end: {
                    line: 25,
                    column: 3
                }
            },
            "7": {
                start: {
                    line: 26,
                    column: 0
                },
                end: {
                    line: 29,
                    column: 3
                }
            },
            "8": {
                start: {
                    line: 31,
                    column: 0
                },
                end: {
                    line: 34,
                    column: 3
                }
            },
            "9": {
                start: {
                    line: 35,
                    column: 0
                },
                end: {
                    line: 38,
                    column: 3
                }
            },
            "10": {
                start: {
                    line: 39,
                    column: 0
                },
                end: {
                    line: 42,
                    column: 3
                }
            },
            "11": {
                start: {
                    line: 43,
                    column: 0
                },
                end: {
                    line: 46,
                    column: 3
                }
            },
            "12": {
                start: {
                    line: 48,
                    column: 0
                },
                end: {
                    line: 51,
                    column: 3
                }
            },
            "13": {
                start: {
                    line: 52,
                    column: 0
                },
                end: {
                    line: 55,
                    column: 3
                }
            },
            "14": {
                start: {
                    line: 56,
                    column: 0
                },
                end: {
                    line: 59,
                    column: 3
                }
            },
            "15": {
                start: {
                    line: 60,
                    column: 0
                },
                end: {
                    line: 63,
                    column: 3
                }
            },
            "16": {
                start: {
                    line: 65,
                    column: 0
                },
                end: {
                    line: 68,
                    column: 3
                }
            },
            "17": {
                start: {
                    line: 69,
                    column: 0
                },
                end: {
                    line: 72,
                    column: 3
                }
            },
            "18": {
                start: {
                    line: 73,
                    column: 0
                },
                end: {
                    line: 73,
                    column: 30
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
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0,
            "9": 0,
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0,
            "15": 0,
            "16": 0,
            "17": 0,
            "18": 0
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

cov_1r17mrjg4.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var tables_1 = (cov_1r17mrjg4.s[1]++, require("./tables"));
// FoodProduct
cov_1r17mrjg4.s[2]++;
tables_1.FoodProduct.belongsTo(tables_1.Food, {
    foreignKey: 'food_id',
    as: 'food'
});
cov_1r17mrjg4.s[3]++;
tables_1.Food.hasMany(tables_1.FoodProduct, {
    foreignKey: 'food_id',
    as: 'products_of_food'
});
cov_1r17mrjg4.s[4]++;
tables_1.FoodProduct.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
cov_1r17mrjg4.s[5]++;
tables_1.Product.hasMany(tables_1.FoodProduct, {
    foreignKey: 'product_id',
    as: 'foods_of_product'
});
// Review
cov_1r17mrjg4.s[6]++;
tables_1.Review.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
cov_1r17mrjg4.s[7]++;
tables_1.Product.hasMany(tables_1.Review, {
    foreignKey: 'product_id',
    as: 'comments'
});
// ProductShop
cov_1r17mrjg4.s[8]++;
tables_1.ProductShop.belongsTo(tables_1.Shop, {
    foreignKey: 'shop_id',
    as: 'shop'
});
cov_1r17mrjg4.s[9]++;
tables_1.Shop.hasMany(tables_1.ProductShop, {
    foreignKey: 'shop_id',
    as: 'products_of_shop'
});
cov_1r17mrjg4.s[10]++;
tables_1.ProductShop.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
cov_1r17mrjg4.s[11]++;
tables_1.Product.hasMany(tables_1.ProductShop, {
    foreignKey: 'product_id',
    as: 'shops_of_product'
});
// Product
cov_1r17mrjg4.s[12]++;
tables_1.Product.belongsTo(tables_1.Shop, {
    foreignKey: 'shop_id',
    as: 'shop'
});
cov_1r17mrjg4.s[13]++;
tables_1.Shop.hasMany(tables_1.Product, {
    foreignKey: 'shop_id',
    as: 'products'
});
cov_1r17mrjg4.s[14]++;
tables_1.Product.belongsTo(tables_1.Country, {
    foreignKey: 'country_id',
    as: 'nation'
});
cov_1r17mrjg4.s[15]++;
tables_1.Country.hasMany(tables_1.Product, {
    foreignKey: 'country_id',
    as: 'products'
});
// PriceHistory
cov_1r17mrjg4.s[16]++;
tables_1.PriceHistory.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
cov_1r17mrjg4.s[17]++;
tables_1.Product.hasMany(tables_1.PriceHistory, {
    foreignKey: 'product_id',
    as: 'price_histories'
});
cov_1r17mrjg4.s[18]++;
console.log('run associates');
//# sourceMappingURL=associates.js.map
//# sourceMappingURL=associates.js.map