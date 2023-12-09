import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

const meta = {
  title: 'shared/redesigned/Button/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Text', variant: 'filled' },
};

export const PrimaryDark: Story = {
  args: { children: 'Text', variant: 'filled' },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
  args: { children: 'Text', variant: 'clear' },
};

export const Outline: Story = {
  args: { children: 'Text', variant: 'outline' },
};

export const SquareMTheme: Story = {
  args: {
    children: '>',

    square: true,
    size: 'm',
  },
};
export const SquareLTheme: Story = {
  args: {
    children: '>',

    square: true,
    size: 'l',
  },
};
export const SquareXLTheme: Story = {
  args: {
    children: '>',

    square: true,
    size: 'xl',
  },
};
export const SquareThemeDark: Story = {
  args: {
    children: '>',
    square: true,
    size: 'm',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    size: 'l',
  },
};
export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    size: 'xl',
  },
};
export const Disabled: Story = {
  args: {
    children: 'Text',
    inactive: true,
  },
};
