"use strict";

var cov_2813ctx8zl = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/config/database.js",
        hash = "59c941a9de38ca1a6c06b270d46c9b869a89028d",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/config/database.js",
        statementMap: {
            "0": {
                start: {
                    line: 1,
                    column: 0
                },
                end: {
                    line: 1,
                    column: 27
                }
            },
            "1": {
                start: {
                    line: 2,
                    column: 0
                },
                end: {
                    line: 24,
                    column: 2
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0
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

cov_2813ctx8zl.s[0]++;
require('dotenv').config();
cov_2813ctx8zl.s[1]++;
module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.HOST,
        "dialect": "postgresql"
    },
    "test": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_NAME,
        "host": process.env.HOST,
        "dialect": "postgresql"
    },
    "production": {
        "username": process.env.PROD_DB_USER,
        "password": process.env.PROD_DB_PASS,
        "database": process.env.PROD_DB_NAME,
        "host": process.env.PROD_HOST,
        "dialect": "postgresql"
    }
};
//# sourceMappingURL=database.js.map
//# sourceMappingURL=database.js.map