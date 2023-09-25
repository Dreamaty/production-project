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
import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';
describe('Button', function () {
    test('should render Button', function () {
        render(_jsx(Button, { children: "TEST" }));
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Test with clear theme', function () {
        render(_jsx(Button, __assign({ theme: ButtonTheme.CLEAR }, { children: "TEST" })));
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
