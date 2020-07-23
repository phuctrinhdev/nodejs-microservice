"use strict";

var cov_koescb37s = function () {
    var path = "/Users/hoangphuc/nowcrawler/build/models/collections/sampleModel.mongo.js",
        hash = "85297873518bf5ae5cfeb2be42d98c417768e16a",
        Function = function () {}.constructor,
        global = new Function('return this')(),
        gcv = "__coverage__",
        coverageData = {
        path: "/Users/hoangphuc/nowcrawler/build/models/collections/sampleModel.mongo.js",
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
                    column: 36
                }
            },
            "2": {
                start: {
                    line: 4,
                    column: 15
                },
                end: {
                    line: 4,
                    column: 30
                }
            },
            "3": {
                start: {
                    line: 5,
                    column: 21
                },
                end: {
                    line: 10,
                    column: 2
                }
            },
            "4": {
                start: {
                    line: 11,
                    column: 0
                },
                end: {
                    line: 11,
                    column: 56
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
            "4": 0
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

cov_koescb37s.s[0]++;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = (cov_koescb37s.s[1]++, require("mongoose"));
var Schema = (cov_koescb37s.s[2]++, mongoose.Schema);
var sampleSchema = (cov_koescb37s.s[3]++, new Schema({
    string: { type: String },
    number: { type: Number },
    enum: { type: String, enum: ["a", "b"] },
    status: { type: String, enum: ["active", "deactive"], default: "deactive" }
}));
cov_koescb37s.s[4]++;
exports.Sample = mongoose.model('Sample', sampleSchema);
//# sourceMappingURL=sampleModel.mongo.js.map
//# sourceMappingURL=sampleModel.mongo.js.map