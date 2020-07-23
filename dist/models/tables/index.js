"use strict";

var cov_10snyz44ey = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/tables/index.js",
        hash = "a97b06ba3c8b2c564f9733c7423f572e6a57d0d0",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/tables/index.js",
        statementMap: {
            "0": {
                start: {
                    line: 3,
                    column: 4
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "1": {
                start: {
                    line: 3,
                    column: 21
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "2": {
                start: {
                    line: 3,
                    column: 53
                },
                end: {
                    line: 3,
                    column: 71
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 0
                },
                end: {
                    line: 5,
                    column: 62
                }
            },
            "4": {
                start: {
                    line: 6,
                    column: 0
                },
                end: {
                    line: 6,
                    column: 28
                }
            },
            "5": {
                start: {
                    line: 7,
                    column: 0
                },
                end: {
                    line: 7,
                    column: 32
                }
            },
            "6": {
                start: {
                    line: 8,
                    column: 0
                },
                end: {
                    line: 8,
                    column: 28
                }
            },
            "7": {
                start: {
                    line: 9,
                    column: 0
                },
                end: {
                    line: 9,
                    column: 31
                }
            },
            "8": {
                start: {
                    line: 10,
                    column: 0
                },
                end: {
                    line: 10,
                    column: 36
                }
            },
            "9": {
                start: {
                    line: 11,
                    column: 0
                },
                end: {
                    line: 11,
                    column: 37
                }
            },
            "10": {
                start: {
                    line: 12,
                    column: 0
                },
                end: {
                    line: 12,
                    column: 31
                }
            },
            "11": {
                start: {
                    line: 13,
                    column: 0
                },
                end: {
                    line: 13,
                    column: 28
                }
            },
            "12": {
                start: {
                    line: 14,
                    column: 0
                },
                end: {
                    line: 14,
                    column: 30
                }
            },
            "13": {
                start: {
                    line: 15,
                    column: 0
                },
                end: {
                    line: 15,
                    column: 36
                }
            },
            "14": {
                start: {
                    line: 16,
                    column: 0
                },
                end: {
                    line: 16,
                    column: 33
                }
            }
        },
        fnMap: {
            "0": {
                name: "__export",
                decl: {
                    start: {
                        line: 2,
                        column: 9
                    },
                    end: {
                        line: 2,
                        column: 17
                    }
                },
                loc: {
                    start: {
                        line: 2,
                        column: 21
                    },
                    end: {
                        line: 4,
                        column: 1
                    }
                },
                line: 2
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                },
                type: "if",
                locations: [{
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                }, {
                    start: {
                        line: 3,
                        column: 21
                    },
                    end: {
                        line: 3,
                        column: 71
                    }
                }],
                line: 3
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
            "8": 0,
            "9": 0,
            "10": 0,
            "11": 0,
            "12": 0,
            "13": 0,
            "14": 0
        },
        f: {
            "0": 0
        },
        b: {
            "0": [0, 0]
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

function __export(m) {
    cov_10snyz44ey.f[0]++;
    cov_10snyz44ey.s[0]++;

    for (var p in m) {
        cov_10snyz44ey.s[1]++;
        if (!exports.hasOwnProperty(p)) {
                cov_10snyz44ey.b[0][0]++;
                cov_10snyz44ey.s[2]++;
                exports[p] = m[p];
            } else {
            cov_10snyz44ey.b[0][1]++;
        }
    }
}
cov_10snyz44ey.s[3]++;
Object.defineProperty(exports, "__esModule", { value: true });
cov_10snyz44ey.s[4]++;
__export(require("./user"));
cov_10snyz44ey.s[5]++;
__export(require("./employee"));
cov_10snyz44ey.s[6]++;
__export(require("./shop"));
cov_10snyz44ey.s[7]++;
__export(require("./product"));
cov_10snyz44ey.s[8]++;
__export(require("./product_shop"));
cov_10snyz44ey.s[9]++;
__export(require("./price_product"));
cov_10snyz44ey.s[10]++;
__export(require("./country"));
cov_10snyz44ey.s[11]++;
__export(require("./food"));
cov_10snyz44ey.s[12]++;
__export(require("./review"));
cov_10snyz44ey.s[13]++;
__export(require("./food_product"));
cov_10snyz44ey.s[14]++;
__export(require("./translate"));
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map