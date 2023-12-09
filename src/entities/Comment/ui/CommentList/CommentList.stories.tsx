import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import {
  userForTesting1,
  userForTesting2,
} from '@/entities/User/testing';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/comment/CommentList',
  component: CommentList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    comments: [
      {
        id: '1',
        text: 'First comment',
        user: userForTesting1,
      },
      {
        id: '2',
        text: `${userForTesting1.username} You are a poop`,
        user: userForTesting2,
      },
      {
        id: '3',
        text: 'Not you',
        user: userForTesting1,
      },
    ],
  },
} satisfies Meta<typeof CommentList>;
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
