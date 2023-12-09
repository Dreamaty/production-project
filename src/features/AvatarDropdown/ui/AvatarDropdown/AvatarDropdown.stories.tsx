import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { userForTesting1 } from '@/entities/User/testing';

import { AvatarDropdown } from './AvatarDropdown';

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    StoreDecorator({ user: { authData: userForTesting1 } }),
    FeatureFlagDecorator({ isAppRedesigned: false }),
    ThemeDecorator(Theme.LIGHT),
  ],
} satisfies Meta<typeof AvatarDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightRedesigned: Story = {
  args: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
};
export const DarkRedesigned: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
