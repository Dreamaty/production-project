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
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
//Component for test ErrorBoundary
export var BugButton = function () {
    var _a = useState(false), error = _a[0], setError = _a[1];
    var t = useTranslation().t;
    var throwError = function () {
        setError(function (last) { return !last; });
    };
    useEffect(function () {
        if (error)
            throw new Error();
    }, [error]);
    return _jsx(Button, __assign({ onClick: throwError }, { children: t('Throw Error') }));
};
