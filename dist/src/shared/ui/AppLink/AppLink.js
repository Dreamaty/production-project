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
import { Link } from 'react-router-dom';
import { cx } from 'shared/lib/classNames/cx';
import cls from './AppLink.module.scss';
export var AppLinkTheme;
(function (AppLinkTheme) {
    AppLinkTheme["PRIMARY"] = "primary";
    AppLinkTheme["SECONDARY"] = "secondary";
})(AppLinkTheme || (AppLinkTheme = {}));
export var AppLink = function (_a) {
    var className = _a.className, children = _a.children, to = _a.to, _b = _a.theme, theme = _b === void 0 ? AppLinkTheme.PRIMARY : _b, otherProps = __rest(_a, ["className", "children", "to", "theme"]);
    return (_jsx(Link, __assign({ to: to, className: cx(cls.appLink, {}, [className, cls[theme]]) }, otherProps, { children: children })));
};
