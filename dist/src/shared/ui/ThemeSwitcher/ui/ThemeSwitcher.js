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
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { cx } from 'shared/lib/classNames/cx';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), theme = _b.theme, toggleTheme = _b.toggleTheme;
    LightIcon;
    DarkIcon;
    return (_jsx(Button, __assign({ className: cx('', {}, [className]), onClick: toggleTheme, theme: ButtonTheme.CLEAR }, { children: theme === Theme.LIGHT ? _jsx(LightIcon, {}) : _jsx(DarkIcon, {}) })));
};
