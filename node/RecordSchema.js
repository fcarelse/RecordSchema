"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordSchema = void 0;
var fxcie_utils_1 = require("fxcie-utils");
var RecordSchema_values_1 = require("./RecordSchema.values");
var RecordSchema = /** @class */ (function () {
    function RecordSchema() {
        this.meta = __assign({}, RecordSchema_values_1.DEFAULT_META);
        this.model = __assign({}, RecordSchema_values_1.DEFAULT_MODEL);
    }
    RecordSchema.prototype.toJSON = function () {
        return JSON.stringify({ meta: this.meta, model: this.model });
    };
    RecordSchema.genFromJSON = function (temp) {
        if (!(temp instanceof Object))
            return false;
        var meta = __assign({}, temp.meta);
    };
    RecordSchema.isValidMeta = function (sample) {
        if (!(sample instanceof Object))
            return false;
        return true;
    };
    RecordSchema.isValidModel = function (sample) {
        if (!(sample instanceof Object))
            return false;
        var fields = Object.keys(sample);
        return fields.reduce(function (fail, field) {
            if ((0, fxcie_utils_1.isNonEmptyString)(sample[field]))
                fail = false;
            if (!sample[field].label)
                return false;
            return fail;
        }, true);
    };
    return RecordSchema;
}());
exports.RecordSchema = RecordSchema;
