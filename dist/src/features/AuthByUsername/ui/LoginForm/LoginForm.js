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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cx } from 'shared/lib/classNames/cx';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';
export var LoginForm = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(''), login = _b[0], setLogin = _b[1];
    var _c = useState(''), password = _c[0], setPassword = _c[1];
    return (_jsxs("div", __assign({ className: cx(cls.loginForm, {}, [className]) }, { children: [_jsx(Input, { type: "text", placeholder: t('Login'), value: login, autoFocus: true, onChange: function (val) { return setLogin(val); } }), _jsx(Input, { type: "text", placeholder: t('Password'), value: password, onChange: function (val) {
                    setPassword(val);
                } }), _jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, className: cls.loginBtn }, { children: t('Sign In') }))] })));
};
