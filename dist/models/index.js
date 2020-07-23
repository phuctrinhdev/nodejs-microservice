"use strict";

var cov_1t2d5f3dzv = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/index.js",
        hash = "0aee6f0b846bd8fdc628c940a487c1591a505e5b",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/index.js",
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
                    column: 31
                }
            },
            "5": {
                start: {
                    line: 8,
                    column: 0
                },
                end: {
                    line: 8,
                    column: 30
                }
            },
            "6": {
                start: {
                    line: 9,
                    column: 0
                },
                end: {
                    line: 9,
                    column: 24
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
            "6": 0
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
    cov_1t2d5f3dzv.f[0]++;
    cov_1t2d5f3dzv.s[0]++;

    for (var p in m) {
        cov_1t2d5f3dzv.s[1]++;
        if (!exports.hasOwnProperty(p)) {
                cov_1t2d5f3dzv.b[0][0]++;
                cov_1t2d5f3dzv.s[2]++;
                exports[p] = m[p];
            } else {
            cov_1t2d5f3dzv.b[0][1]++;
        }
    }
}
cov_1t2d5f3dzv.s[3]++;
Object.defineProperty(exports, "__esModule", { value: true });
cov_1t2d5f3dzv.s[4]++;
__export(require("./base.pg"));
//export * from './collections'
cov_1t2d5f3dzv.s[5]++;
__export(require("./tables"));
cov_1t2d5f3dzv.s[6]++;
require("./associates");
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map