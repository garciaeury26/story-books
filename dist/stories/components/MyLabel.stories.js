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
exports.LabelWithBackground = exports.CustomColor = exports.Large = exports.Medium = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
// 1- exportqcion por defecto
exports.default = {
    // con el title le indico en que grupo se va a grupar
    // tambien le puedo dar un nombre al componente con => Optional:/nombre
    title: "UI/Titles/MyLabel",
    component: MyLabel_1.MyLabel,
    //control props => personalizado
    argTypes: {
        fontColor: {
            control: {
                type: "color",
                presetColors: ['#ff0000', '#00ff00', '#0000ff'],
            }
        },
        bgColor: {
            control: { type: "color" }
        }
    }
};
// definicion del template o base
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// modelo variacion del template 
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Basic',
};
// medium
exports.Medium = Template.bind({});
exports.Medium.args = {
    label: 'Medium',
    size: "h2",
    style: "bold",
    color: "tertiary",
};
// large
exports.Large = Template.bind({});
exports.Large.args = {
    label: 'Large',
    size: "h1",
    style: "italic",
    allInCapital: true,
};
// color personalizado
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    label: 'Custom Color',
    size: "h1",
    style: "bold",
    allInCapital: true,
    fontColor: "#59d669"
};
// Label with Background
exports.LabelWithBackground = Template.bind({});
exports.LabelWithBackground.args = {
    label: 'Label with Background',
    style: "bold",
    bgColor: "#222",
    color: "tertiary"
};
