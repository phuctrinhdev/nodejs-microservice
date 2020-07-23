"use strict";

var cov_vf6ycm93x = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/config/index.js",
        hash = "27fe68555d0e43605444595788efcef71f6c36eb",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/config/index.js",
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
                    column: 22
                },
                end: {
                    line: 3,
                    column: 46
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 21
                },
                end: {
                    line: 4,
                    column: 44
                }
            },
            "3": {
                start: {
                    line: 6,
                    column: 4
                },
                end: {
                    line: 14,
                    column: 5
                }
            },
            "4": {
                start: {
                    line: 7,
                    column: 8
                },
                end: {
                    line: 7,
                    column: 37
                }
            },
            "5": {
                start: {
                    line: 9,
                    column: 9
                },
                end: {
                    line: 14,
                    column: 5
                }
            },
            "6": {
                start: {
                    line: 10,
                    column: 8
                },
                end: {
                    line: 10,
                    column: 36
                }
            },
            "7": {
                start: {
                    line: 13,
                    column: 8
                },
                end: {
                    line: 13,
                    column: 37
                }
            },
            "8": {
                start: {
                    line: 16,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 49
                }
            }
        },
        fnMap: {
            "0": {
                name: "getConfig",
                decl: {
                    start: {
                        line: 5,
                        column: 9
                    },
                    end: {
                        line: 5,
                        column: 18
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 32
                    },
                    end: {
                        line: 15,
                        column: 1
                    }
                },
                line: 5
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 6,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 6,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                }, {
                    start: {
                        line: 6,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                }],
                line: 6
            },
            "1": {
                loc: {
                    start: {
                        line: 9,
                        column: 9
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 9,
                        column: 9
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                }, {
                    start: {
                        line: 9,
                        column: 9
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                }],
                line: 9
            }
        },
        s: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6": 0,
            "7": 0,
            "8": 0
        },
        f: {
            "0": 0
        },
        b: {
            "0": [0, 0],
            "1": [0, 0]
        },
        _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
        coverage = global[gcv] || (global[gcv] = {});

    if (coverage[path] && coverage[path].hash === hash) {
        return coverage[path];
    }

    coverageData.hash = hash;
    return coverage[path] = coverageData;
}();

cov_vf6ycm93x.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var development_1 = (cov_vf6ycm93x.s[1]++, require("./development"));
var production_1 = (cov_vf6ycm93x.s[2]++, require("./production"));
function getConfig(environment) {
    cov_vf6ycm93x.f[0]++;
    cov_vf6ycm93x.s[3]++;

    if (environment === 'development') {
        cov_vf6ycm93x.b[0][0]++;
        cov_vf6ycm93x.s[4]++;

        return development_1.default;
    } else {
            cov_vf6ycm93x.b[0][1]++;
            cov_vf6ycm93x.s[5]++;
            if (environment === 'production') {
                cov_vf6ycm93x.b[1][0]++;
                cov_vf6ycm93x.s[6]++;

                return production_1.default;
            } else {
                cov_vf6ycm93x.b[1][1]++;
                cov_vf6ycm93x.s[7]++;

                return development_1.default;
            }
        }
}
cov_vf6ycm93x.s[8]++;
exports.config = getConfig(process.env.NODE_ENV);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map