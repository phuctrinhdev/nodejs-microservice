"use strict";

var cov_11uq3ny8aj = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/employee.js",
        hash = "90b94a5c9f8f602aa2afe11a21e20d547ad91598",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/employee.js",
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
                    column: 0
                },
                end: {
                    line: 69,
                    column: 3
                }
            }
        },
        fnMap: {},
        branchMap: {},
        s: {
            "0": 0,
            "1": 0,
            "2": 0
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

cov_11uq3ny8aj.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_11uq3ny8aj.s[1]++, require("../base"));
cov_11uq3ny8aj.s[2]++;
exports.Employee = base_1.sequelize.define('tbl_employee', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    fullname: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    avatar: {
        type: base_1.Sequelize.STRING,
        allowNull: true
    },
    phone: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: base_1.Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: base_1.Sequelize.ENUM,
        values: ['OPERATOR', 'ADMIN', 'SUPERADMIN'],
        defaultValue: 'OPERATOR',
        allowNull: false
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true
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
//# sourceMappingURL=employee.js.map
//# sourceMappingURL=employee.js.map