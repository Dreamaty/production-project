import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
var meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    args: { to: '/' },
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export var Primary = {
    args: { theme: AppLinkTheme.PRIMARY, children: 'text' },
};
export var Secondary = {
    args: { theme: AppLinkTheme.SECONDARY, children: 'text' },
};
export var PrimaryDark = {
    args: { theme: AppLinkTheme.PRIMARY, children: 'text' },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export var SecondaryDark = {
    args: { theme: AppLinkTheme.SECONDARY, children: 'text' },
    decorators: [ThemeDecorator(Theme.DARK)],
};
