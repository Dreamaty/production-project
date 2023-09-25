import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
var meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export var Primary = {
    args: { children: 'Text' },
};
export var Clear = {
    args: { children: 'Text', theme: ButtonTheme.CLEAR },
};
export var ClearInverted = {
    args: { children: 'Text', theme: ButtonTheme.CLEAR_INVERTED },
};
export var Outline = {
    args: { children: 'Text', theme: ButtonTheme.OUTLINE },
};
export var BackgroundTheme = {
    args: { children: 'Text', theme: ButtonTheme.BACKGROUND },
};
export var BackgroundThemeDark = {
    args: { children: 'Text', theme: ButtonTheme.BACKGROUND },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var BackgroundInvertedTheme = {
    args: { children: 'Text', theme: ButtonTheme.BACKGROUND_INVERTED },
};
export var BackgroundInvertedThemeDark = {
    args: { children: 'Text', theme: ButtonTheme.BACKGROUND_INVERTED },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SquareMTheme = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};
export var SquareLTheme = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export var SquareXLTheme = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
export var SquareThemeDark = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var OutlineSizeL = {
    args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.L },
};
export var OutlineSizeXL = {
    args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.XL },
};
