import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Navbar } from './Navbar';

const meta = {
  title: 'widgets/Navbar/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  argTypes: {},
  decorators: [StoreDecorator({})],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};
export const LightAuth: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: {} } }),
  ],
};
