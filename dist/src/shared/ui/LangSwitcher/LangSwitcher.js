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
import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { cx } from 'shared/lib/classNames/cx';
import { Button } from '../Button';
import { ButtonTheme } from '../Button/ui/Button';
export var LangSwitcher = function (_a) {
    var className = _a.className, short = _a.short;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    return (_jsx(Button, __assign({ className: cx('', {}, [className]), theme: ButtonTheme.CLEAR, onClick: function () {
            i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
        } }, { children: t(short ? 'Lang' : 'Language') })));
};
