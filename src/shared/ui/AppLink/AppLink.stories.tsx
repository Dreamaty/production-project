import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { AppLink, AppLinkTheme } from './AppLink';

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
  args: { theme: AppLinkTheme.PRIMARY, children: 'text' },
};
export const Secondary: Story = {
  args: { theme: AppLinkTheme.SECONDARY, children: 'text' },
};
export const PrimaryDark: Story = {
  args: { theme: AppLinkTheme.PRIMARY, children: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SecondaryDark: Story = {
  args: { theme: AppLinkTheme.SECONDARY, children: 'text' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
