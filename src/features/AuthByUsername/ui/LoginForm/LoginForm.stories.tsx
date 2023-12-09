import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    StoreDecorator({
      loginForm: { username: '123', password: 'asd' },
    }),
    FeatureFlagDecorator({ isAppRedesigned: false }),
    ThemeDecorator(Theme.LIGHT),
  ],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const LightWithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: 'asd',
        error: 'ERROR',
      },
    }),
  ],
};
export const LightWithLoading: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LightRedesigned: Story = {
  args: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
};
export const LightWithErrorRedesigned: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: {
        username: '123',
        password: 'asd',
        error: 'ERROR',
      },
    }),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const LightWithLoadingRedesigned: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const DarkRedesigned: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
