"use strict";

var cov_1i4ef4jn5o = function () {
  var path = "/Users/hoangphuc/nowcrawler/build/middlewares/index.js",
      hash = "0ddab812197ef9c86b79c48bede30312363e44a5",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "/Users/hoangphuc/nowcrawler/build/middlewares/index.js",
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
          column: 25
        },
        end: {
          line: 3,
          column: 52
        }
      },
      "2": {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 4,
          column: 54
        }
      },
      "3": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 54
        }
      },
      "4": {
        start: {
          line: 6,
          column: 33
        },
        end: {
          line: 6,
          column: 68
        }
      },
      "5": {
        start: {
          line: 7,
          column: 35
        },
        end: {
          line: 7,
          column: 72
        }
      },
      "6": {
        start: {
          line: 8,
          column: 30
        },
        end: {
          line: 8,
          column: 62
        }
      },
      "7": {
        start: {
          line: 9,
          column: 30
        },
        end: {
          line: 9,
          column: 62
        }
      },
      "8": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 10,
          column: 50
        }
      },
      "9": {
        start: {
          line: 11,
          column: 27
        },
        end: {
          line: 11,
          column: 68
        }
      },
      "10": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 48
        }
      },
      "11": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 63
        }
      },
      "12": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 42
        }
      },
      "13": {
        start: {
          line: 15,
          column: 24
        },
        end: {
          line: 15,
          column: 63
        }
      },
      "14": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 42
        }
      },
      "15": {
        start: {
          line: 17,
          column: 31
        },
        end: {
          line: 17,
          column: 88
        }
      },
      "16": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 56
        }
      },
      "17": {
        start: {
          line: 19,
          column: 33
        },
        end: {
          line: 19,
          column: 90
        }
      },
      "18": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 60
        }
      },
      "19": {
        start: {
          line: 21,
          column: 28
        },
        end: {
          line: 21,
          column: 75
        }
      },
      "20": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 50
        }
      },
      "21": {
        start: {
          line: 23,
          column: 28
        },
        end: {
          line: 23,
          column: 75
        }
      },
      "22": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "23": {
        start: {
          line: 25,
          column: 22
        },
        end: {
          line: 25,
          column: 57
        }
      },
      "24": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 38
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
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
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

cov_1i4ef4jn5o.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var authMiddleware_1 = (cov_1i4ef4jn5o.s[1]++, require("./authMiddleware"));
var blockMiddleware_1 = (cov_1i4ef4jn5o.s[2]++, require("./blockMiddleware"));
var queryMiddleware_1 = (cov_1i4ef4jn5o.s[3]++, require("./queryMiddleware"));
var firebaseAuthMiddleware_1 = (cov_1i4ef4jn5o.s[4]++, require("./firebaseAuthMiddleware"));
var superAdminTypeMiddleware_1 = (cov_1i4ef4jn5o.s[5]++, require("./superAdminTypeMiddleware"));
var adminTypeMiddleware_1 = (cov_1i4ef4jn5o.s[6]++, require("./adminTypeMiddleware"));
var checkAuthMiddleware_1 = (cov_1i4ef4jn5o.s[7]++, require("./checkAuthMiddleware"));
var nowMiddleware_1 = (cov_1i4ef4jn5o.s[8]++, require("./nowMiddleware"));
var authInfoMiddleware = (cov_1i4ef4jn5o.s[9]++, new authMiddleware_1.AuthInfoMiddleware());
cov_1i4ef4jn5o.s[10]++;
exports.authInfoMiddleware = authInfoMiddleware;
var blockMiddleware = (cov_1i4ef4jn5o.s[11]++, new blockMiddleware_1.BlockMiddleware());
cov_1i4ef4jn5o.s[12]++;
exports.blockMiddleware = blockMiddleware;
var queryMiddleware = (cov_1i4ef4jn5o.s[13]++, new queryMiddleware_1.QueryMiddleware());
cov_1i4ef4jn5o.s[14]++;
exports.queryMiddleware = queryMiddleware;
var firebaseAuthMiddleware = (cov_1i4ef4jn5o.s[15]++, new firebaseAuthMiddleware_1.FirebaseAuthInfoMiddleware());
cov_1i4ef4jn5o.s[16]++;
exports.firebaseAuthMiddleware = firebaseAuthMiddleware;
var superAdminTypeMiddleware = (cov_1i4ef4jn5o.s[17]++, new superAdminTypeMiddleware_1.SuperAdminTypeMiddleware());
cov_1i4ef4jn5o.s[18]++;
exports.superAdminTypeMiddleware = superAdminTypeMiddleware;
var adminTypeMiddleware = (cov_1i4ef4jn5o.s[19]++, new adminTypeMiddleware_1.AdminTypeMiddleware());
cov_1i4ef4jn5o.s[20]++;
exports.adminTypeMiddleware = adminTypeMiddleware;
var checkAuthMiddleware = (cov_1i4ef4jn5o.s[21]++, new checkAuthMiddleware_1.CheckAuthMiddleware());
cov_1i4ef4jn5o.s[22]++;
exports.checkAuthMiddleware = checkAuthMiddleware;
var nowMiddleware = (cov_1i4ef4jn5o.s[23]++, new nowMiddleware_1.NowMiddleware());
cov_1i4ef4jn5o.s[24]++;
exports.nowMiddleware = nowMiddleware;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map