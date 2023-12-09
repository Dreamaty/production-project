import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onSendComment: { action: 'onSendComment' },
  },
  decorators: [
    StoreDecorator({}),
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
} satisfies Meta<typeof AddCommentForm>;
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
