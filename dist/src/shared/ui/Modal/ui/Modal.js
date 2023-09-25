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
import { useCallback, useEffect, useRef, useState, } from 'react';
import { cx } from 'shared/lib/classNames/cx';
import { Portal } from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';
var ANIMATION_DELAY = 300;
export var Modal = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, isOpen = _a.isOpen, onClose = _a.onClose, lazy = _a.lazy;
    var _c = useState(false), isClosing = _c[0], setIsClosing = _c[1];
    var _d = useState(false), isMounted = _d[0], setIsMounted = _d[1];
    var timerRef = useRef();
    var closeHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onContentClick = function (e) {
        e.stopPropagation();
    };
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);
    useEffect(function () {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    var mods = (_b = {},
        _b[cls.opened] = isOpen,
        _b[cls.closing] = isClosing,
        _b);
    if (lazy && !isMounted)
        return null;
    return (_jsx(Portal, { children: _jsx("div", __assign({ "data-testid": "modal", className: cx(cls.modal, mods, [className]) }, { children: _jsx("div", __assign({ "data-testid": "overlay", className: cls.overlay, onClick: closeHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children })) })) })) }));
};
