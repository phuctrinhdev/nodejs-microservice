"use strict";

var cov_1hdeawxnvv = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/user.js",
        hash = "f8a36fe4e828614ca24b4d157f88d2d4f301434f",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/user.js",
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
                    line: 114,
                    column: 3
                }
            },
            "5": {
                start: {
                    line: 94,
                    column: 12
                },
                end: {
                    line: 94,
                    column: 65
                }
            },
            "6": {
                start: {
                    line: 95,
                    column: 12
                },
                end: {
                    line: 95,
                    column: 65
                }
            },
            "7": {
                start: {
                    line: 98,
                    column: 12
                },
                end: {
                    line: 98,
                    column: 65
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 93,
                        column: 22
                    },
                    end: {
                        line: 93,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 93,
                        column: 33
                    },
                    end: {
                        line: 96,
                        column: 9
                    }
                },
                line: 93
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 97,
                        column: 22
                    },
                    end: {
                        line: 97,
                        column: 23
                    }
                },
                loc: {
                    start: {
                        line: 97,
                        column: 33
                    },
                    end: {
                        line: 99,
                        column: 9
                    }
                },
                line: 97
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

cov_1hdeawxnvv.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_1hdeawxnvv.s[1]++, require("../base"));
var moment = (cov_1hdeawxnvv.s[2]++, require("moment"));
var unix_timestamp_now = (cov_1hdeawxnvv.s[3]++, moment().valueOf());
cov_1hdeawxnvv.s[4]++;
exports.User = base_1.sequelize.define('tbl_user', {
    id: {
        type: base_1.Sequelize.UUID,
        defaultValue: base_1.Sequelize.UUIDV1,
        primaryKey: true
    },
    username: {
        type: base_1.Sequelize.STRING
    },
    fullname: {
        type: base_1.Sequelize.STRING
    },
    avatar: {
        type: base_1.Sequelize.STRING
    },
    phone: {
        type: base_1.Sequelize.STRING
    },
    email: {
        type: base_1.Sequelize.STRING
    },
    age: {
        type: base_1.Sequelize.INTEGER,
        validate: {
            min: 0
        },
        defaultValue: 0,
        allowNull: false
    },
    sex: {
        type: base_1.Sequelize.STRING,
        validate: {
            isIn: [['MALE', 'FEMALE']]
        }
    },
    locale: {
        type: base_1.Sequelize.STRING
    },
    login_type: {
        type: base_1.Sequelize.STRING,
        validate: {
            isIn: [['FACEBOOK', 'GOOGLE']]
        },
        allowNull: false
    },
    status: {
        type: base_1.Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    created_at_unix_timestamp: {
        type: base_1.Sequelize.BIGINT,
        validate: {
            min: 0
        },
        defaultValue: 0
    },
    updated_at_unix_timestamp: {
        type: base_1.Sequelize.BIGINT,
        validate: {
            min: 0
        },
        defaultValue: 0
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
            cov_1hdeawxnvv.f[0]++;
            cov_1hdeawxnvv.s[5]++;

            model.created_at_unix_timestamp = unix_timestamp_now;
            cov_1hdeawxnvv.s[6]++;
            model.updated_at_unix_timestamp = unix_timestamp_now;
        },
        beforeUpdate: function beforeUpdate(model) {
            cov_1hdeawxnvv.f[1]++;
            cov_1hdeawxnvv.s[7]++;

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
//# sourceMappingURL=user.js.map
//# sourceMappingURL=user.js.map