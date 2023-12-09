import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/comment/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comment: {
      id: '1',
      text: 'abracadabbradaskfjafjasdfj',
      user: {
        id: '2',
        username: 'abracadabbraskfjafjasdf',
        avatar: 'dasdf',
      },
    },
  },
} satisfies Meta<typeof CommentCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const LightRedesigned: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.LIGHT),
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
