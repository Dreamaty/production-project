import { Theme } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
var meta = {
    title: 'widget/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export var Light = {
    args: {},
};
export var Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
