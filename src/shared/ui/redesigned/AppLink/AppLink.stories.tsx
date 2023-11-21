import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen',
  },
  args: { to: '/' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AppLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'text' },
};
export const VariantRed: Story = {
  args: { variant: 'red', children: 'text' },
};
export const PrimaryDark: Story = {
  args: { children: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const VariantRedDark: Story = {
  args: { variant: 'red', children: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
