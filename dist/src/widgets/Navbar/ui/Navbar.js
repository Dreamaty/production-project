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
import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cx } from 'shared/lib/classNames/cx';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './Navbar.module.scss';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModalOpen = _b[0], setIsAuthModalOpen = _b[1];
    var onOpenModal = useCallback(function () {
        setIsAuthModalOpen(true);
    }, []);
    var onCloseModal = useCallback(function () {
        setIsAuthModalOpen(false);
    }, []);
    return (_jsxs("div", __assign({ className: cx(cls.navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, className: cls.links, onClick: onOpenModal }, { children: t('Sign In') })), _jsx(LoginModal, { isOpen: isAuthModalOpen, onClose: onCloseModal })] })));
};
