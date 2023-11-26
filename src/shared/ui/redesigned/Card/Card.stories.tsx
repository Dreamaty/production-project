import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Card } from './Card';

const meta = {
  title: 'shared/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: 'Super text for super humans',
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};

export const LightOutlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkOutlined: Story = {
  args: {
    variant: 'outlined',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
