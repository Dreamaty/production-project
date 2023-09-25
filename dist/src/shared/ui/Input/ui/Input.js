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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useRef, useState, } from 'react';
import { cx } from 'shared/lib/classNames/cx';
import cls from './Input.module.scss';
export var Input = memo(function Input(_a) {
    var className = _a.className, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, _b = _a.type, type = _b === void 0 ? 'text' : _b, autoFocus = _a.autoFocus, otherProps = __rest(_a, ["className", "value", "placeholder", "onChange", "type", "autoFocus"]);
    var ref = useRef(null);
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useState(0), caretPosition = _d[0], setCaretPosition = _d[1];
    useEffect(function () {
        var _a;
        if (autoFocus) {
            // setIsFocused(true)
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [autoFocus]);
    var onChangeHandler = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
        setCaretPosition(e.target.value.length);
    };
    var onBlur = function () {
        setIsFocused(false);
    };
    var onFocus = function () {
        setIsFocused(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var onSelect = function (e) {
        setCaretPosition((e === null || e === void 0 ? void 0 : e.target.selectionStart) || 0);
    };
    return (_jsxs("div", __assign({ className: cx(cls.inputWrapper, {}, [className]) }, { children: [placeholder && (_jsx("div", __assign({ className: cls.placeholder }, { children: "".concat(placeholder, ">") }))), _jsxs("div", __assign({ className: cls.caretWrapper }, { children: [_jsx("input", __assign({ ref: ref, type: type, className: cx(cls.input, {}, [className]), value: value, onChange: onChangeHandler, onBlur: onBlur, onFocus: onFocus, onSelect: onSelect }, otherProps)), isFocused && (_jsx("span", { className: cls.caret, style: { left: "".concat(caretPosition * 9.5, "px") } }))] }))] })));
});
