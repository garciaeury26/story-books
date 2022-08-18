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
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
var MyLabel = function (_a) {
    var _b = _a.allInCapital, allInCapital = _b === void 0 ? false : _b, bgColor = _a.bgColor, color = _a.color, _c = _a.label, label = _c === void 0 ? "Label" : _c, _d = _a.size, size = _d === void 0 ? "h3" : _d, _e = _a.style, style = _e === void 0 ? "italic" : _e, fontColor = _a.fontColor;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ style: { color: fontColor, backgroundColor: bgColor }, className: "label ".concat(size, " ").concat(style, " text-").concat(color, " ").concat(allInCapital && "capitalize") }, { children: label })));
};
exports.MyLabel = MyLabel;
