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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from 'shared/lib/classNames/cx';
import cls from './Button.module.scss';
export var ButtonTheme;
(function (ButtonTheme) {
    ButtonTheme["CLEAR"] = "clear";
    ButtonTheme["CLEAR_INVERTED"] = "clearInverted";
    ButtonTheme["OUTLINE"] = "outline";
    ButtonTheme["BACKGROUND"] = "background";
    ButtonTheme["BACKGROUND_INVERTED"] = "backgroundInverted";
})(ButtonTheme || (ButtonTheme = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["M"] = "size_m";
    ButtonSize["L"] = "size_l";
    ButtonSize["XL"] = "size_xl";
})(ButtonSize || (ButtonSize = {}));
export var Button = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, theme = _a.theme, square = _a.square, size = _a.size, otherProps = __rest(_a, ["className", "children", "theme", "square", "size"]);
    var mods = (_b = {},
        _b[cls.square] = square,
        _b);
    return (_jsx("button", __assign({ type: "button", className: cx(cls.button, mods, [className, cls[theme], cls[size]]) }, otherProps, { children: children })));
};
