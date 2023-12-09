import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { userForTesting1 } from '@/entities/User/testing';

import { NavbarRedesigned } from './NavbarRedesigned';

const meta = {
  title: 'widgets/navbar/NavbarRedesigned',
  component: NavbarRedesigned,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
} satisfies Meta<typeof NavbarRedesigned>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightAuth: Story = {
  args: {},
  decorators: [
    StoreDecorator({ user: { authData: userForTesting1 } }),
  ],
};
export const DarkAuth: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ user: { authData: userForTesting1 } }),
  ],
};
