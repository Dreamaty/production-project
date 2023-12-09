import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import Avatar from './channels4_profile.jpg';

const meta = {
  title: 'widgets/article/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    author: {
      id: '1',
      username: 'pretty',
      avatar: Avatar,
      features: { isAppRedesigned: true },
    },
    createdAt: '23.23.2023',
    views: 2323,
  },
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
} satisfies Meta<typeof ArticleAdditionalInfo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
