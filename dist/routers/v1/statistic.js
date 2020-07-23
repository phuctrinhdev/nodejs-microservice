"use strict";

var cov_anu8k5rpp = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/routers/v1/statistic.js",
        hash = "2d4160c1d89fb5967a43b9fd8412b0fd9990773a",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/routers/v1/statistic.js",
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
                    column: 16
                },
                end: {
                    line: 3,
                    column: 34
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 15
                },
                end: {
                    line: 4,
                    column: 33
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 22
                },
                end: {
                    line: 5,
                    column: 46
                }
            },
            "4": {
                start: {
                    line: 8,
                    column: 8
                },
                end: {
                    line: 8,
                    column: 16
                }
            },
            "5": {
                start: {
                    line: 9,
                    column: 8
                },
                end: {
                    line: 9,
                    column: 39
                }
            },
            "6": {
                start: {
                    line: 100,
                    column: 8
                },
                end: {
                    line: 100,
                    column: 134
                }
            },
            "7": {
                start: {
                    line: 103,
                    column: 0
                },
                end: {
                    line: 103,
                    column: 29
                }
            }
        },
        fnMap: {
            "0": {
                name: "(anonymous_0)",
                decl: {
                    start: {
                        line: 7,
                        column: 4
                    },
                    end: {
                        line: 7,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 7,
                        column: 18
                    },
                    end: {
                        line: 14,
                        column: 5
                    }
                },
                line: 7
            },
            "1": {
                name: "(anonymous_1)",
                decl: {
                    start: {
                        line: 99,
                        column: 4
                    },
                    end: {
                        line: 99,
                        column: 5
                    }
                },
                loc: {
                    start: {
                        line: 99,
                        column: 27
                    },
                    end: {
                        line: 101,
                        column: 5
                    }
                },
                line: 99
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

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_anu8k5rpp.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var express = (cov_anu8k5rpp.s[1]++, require("express"));
var base_1 = (cov_anu8k5rpp.s[2]++, require("../base"));
var middlewares_1 = (cov_anu8k5rpp.s[3]++, require("../../middlewares"));

var AuthRouter = function (_ref) {
    (0, _inherits3.default)(AuthRouter, _ref);

    function AuthRouter() {
        (0, _classCallCheck3.default)(this, AuthRouter);
        cov_anu8k5rpp.f[0]++;
        cov_anu8k5rpp.s[4]++;

        var _this = (0, _possibleConstructorReturn3.default)(this, (AuthRouter.__proto__ || Object.getPrototypeOf(AuthRouter)).call(this));

        cov_anu8k5rpp.s[5]++;

        _this.router = express.Router();
        // this.router.post('/dashboard', this.statisticMiddlewares(), this.route(this.statisticDashboard));
        // this.router.post('/statistic_pack', this.statisticMiddlewares(), this.route(this.statisticPack));
        // this.router.post('/statistic_video', this.statisticMiddlewares(), this.route(this.statisticVideo));
        // this.router.post('/summary', this.statisticMiddlewares(), this.route(this.statisticSummary));
        return _this;
    }
    // async statisticSummary(req: Request, res: Response) {
    //     const result = await userController.statisticSummary(req.body, req.queryInfo);
    //     this.onSuccess(res, result);
    // }
    // async statisticVideo(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'SELECT',
    //                     'DAY'
    //                 ]
    //             },
    //             select: {
    //                 enum: [
    //                     'TODAY',
    //                     'LAST_7_DAY',
    //                     'LAST_30_DAY'
    //                 ]
    //             },
    //             from_date: {
    //                 type: 'string'
    //             },
    //             to_date: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await videoController.statisticVideo(req.body, req.queryInfo);
    //     this.onSuccessAsList(res, result, undefined, req.queryInfo)
    // }
    // async statisticPack(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'SELECT',
    //                     'DAY'
    //                 ]
    //             },
    //             select: {
    //                 enum: [
    //                     'TODAY',
    //                     'LAST_7_DAY',
    //                     'LAST_30_DAY'
    //                 ]
    //             },
    //             from_date: {
    //                 type: 'string'
    //             },
    //             to_date: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await packController.statisticPack(req.body, req.queryInfo);
    //     this.onSuccessAsList(res, result, undefined, req.queryInfo)
    // }
    // async statisticDashboard(req: Request, res: Response) {
    //     await this.validateJSON(req.body, {
    //         type: 'object',
    //         properties: {
    //             type: {
    //                 enum: [
    //                     'YEAR',
    //                     'MONTH'
    //                 ]
    //             },
    //             month: {
    //                 type: 'string'
    //             },
    //             year: {
    //                 type: 'string'
    //             }
    //         },
    //         required: ['type']
    //     })
    //     const result = await packController.statisticDashboard(req.body, req.queryInfo);
    //     this.onSuccess(res, result);
    // }


    (0, _createClass3.default)(AuthRouter, [{
        key: "statisticMiddlewares",
        value: function statisticMiddlewares() {
            cov_anu8k5rpp.f[1]++;
            cov_anu8k5rpp.s[6]++;

            return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminTypeMiddleware.run(), middlewares_1.queryMiddleware.run()];
        }
    }]);
    return AuthRouter;
}((base_1.BaseRouter));

cov_anu8k5rpp.s[7]++;

exports.default = AuthRouter;
//# sourceMappingURL=statistic.js.map
//# sourceMappingURL=statistic.js.map