"use strict";

var cov_xhclviihi = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/services/errors/authErrorService.js",
        hash = "69f70c9ebc37ffe2bd8ebfe4023ac284b38df140",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/services/errors/authErrorService.js",
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
                    column: 32
                }
            },
            "2": {
                start: {
                    line: 6,
                    column: 8
                },
                end: {
                    line: 10,
                    column: 11
                }
            },
            "3": {
                start: {
                    line: 15,
                    column: 8
                },
                end: {
                    line: 15,
                    column: 66
                }
            },
            "4": {
                start: {
                    line: 18,
                    column: 8
                },
                end: {
                    line: 18,
                    column: 71
                }
            },
            "5": {
                start: {
                    line: 21,
                    column: 8
                },
                end: {
                    line: 21,
                    column: 59
                }
            },
            "6": {
                start: {
                    line: 24,
                    column: 8
                },
                end: {
                    line: 24,
                    column: 67
                }
            },
            "7": {
                start: {
                    line: 27,
                    column: 0
                },
                end: {
                    line: 27,
                    column: 44
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 5,
                        column: 4
                    },
                    end: {
                        line: 5,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 5,
                        column: 36
                    },
                    end: {
                        line: 11,
                        column: 5
                    }
                },
                line: 5
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 14,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 14,
                        column: 19
                    },
                    end: {
                        line: 16,
                        column: 5
                    }
                },
                line: 14
            },
            "2": {
                name: "(anonymous_2)",
                decl: {
                    start: {
                        line: 17,
                        column: 4
                    },
                    end: {
                        line: 17,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 17,
                        column: 21
                    },
                    end: {
                        line: 19,
                        column: 5
                    }
                },
                line: 17
            },
            "3": {
                name: "(anonymous_3)",
                decl: {
                    start: {
                        line: 20,
                        column: 4
                    },
                    end: {
                        line: 20,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 20,
                        column: 15
                    },
                    end: {
                        line: 22,
                        column: 5
                    }
                },
                line: 20
            },
            "4": {
                name: "(anonymous_4)",
                decl: {
                    start: {
                        line: 23,
                        column: 4
                    },
                    end: {
                        line: 23,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 23,
                        column: 19
                    },
                    end: {
                        line: 25,
                        column: 5
                    }
                },
                line: 23
            }
        },
        branchMap: {
            "0": {
                loc: {
                    start: {
                        line: 7,
                        column: 18
                    },
                    end: {
                        line: 7,
                        column: 29
                    }
                },
                type: "binary-expr",
                locations: [{
                    start: {
                        line: 7,
                        column: 18
                    },
                    end: {
                        line: 7,
                        column: 22
                    }
                }, {
                    start: {
                        line: 7,
                        column: 26
                    },
                    end: {
                        line: 7,
                        column: 29
                    }
                }],
                line: 7
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
            "7": 0
        },
        f: {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
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

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_xhclviihi.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = (cov_xhclviihi.s[1]++, require("./base"));

var AuthException = function (_ref) {
    (0, _inherits3.default)(AuthException, _ref);

    function AuthException(key, message, code) {
        (0, _classCallCheck3.default)(this, AuthException);
        cov_xhclviihi.f[0]++;
        cov_xhclviihi.s[2]++;
        return (0, _possibleConstructorReturn3.default)(this, (AuthException.__proto__ || Object.getPrototypeOf(AuthException)).call(this, {
            code: (cov_xhclviihi.b[0][0]++, code) || (cov_xhclviihi.b[0][1]++, 401),
            type: "auth_exception_" + key,
            message: message
        }));
    }

    return AuthException;
}((base_1.BaseError));

var AuthErrorService = function () {
    function AuthErrorService() {
        (0, _classCallCheck3.default)(this, AuthErrorService);
    }

    (0, _createClass3.default)(AuthErrorService, [{
        key: "unauthorized",
        value: function unauthorized() {
            cov_xhclviihi.f[1]++;
            cov_xhclviihi.s[3]++;

            return new AuthException('unauthorized', 'Unauthorized.');
        }
    }, {
        key: "permissionDeny",
        value: function permissionDeny() {
            cov_xhclviihi.f[2]++;
            cov_xhclviihi.s[4]++;

            return new AuthException('permission_deny', 'Permission Deny');
        }
    }, {
        key: "badToken",
        value: function badToken() {
            cov_xhclviihi.f[3]++;
            cov_xhclviihi.s[5]++;

            return new AuthException('bad_token', 'Bad Token');
        }
    }, {
        key: "tokenExpired",
        value: function tokenExpired() {
            cov_xhclviihi.f[4]++;
            cov_xhclviihi.s[6]++;

            return new AuthException('token_expired', 'Token Expried');
        }
    }]);
    return AuthErrorService;
}();

cov_xhclviihi.s[7]++;

exports.AuthErrorService = AuthErrorService;
//# sourceMappingURL=authErrorService.js.map
//# sourceMappingURL=authErrorService.js.map