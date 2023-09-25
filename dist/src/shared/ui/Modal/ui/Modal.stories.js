import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
var meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        children: 'Aute aliqua officia pariatur deserunt ipsum non aliquip et. Cupidatat veniam ex minim veniam quis. Adipisicing nulla occaecat enim ut. Fugiat officia labore pariatur incididunt exercitation cupidatat.',
        isOpen: true,
    },
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;
export var Light = {};
export var Dark = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
