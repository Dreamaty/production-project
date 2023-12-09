import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleView } from '../../model/consts/consts';
import { articlesForTesting } from '../../test/exampleData';
import { ArticleList } from './ArticleList';

const meta = {
  title: 'entities/article/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    articles: articlesForTesting,
  },
} satisfies Meta<typeof ArticleList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const Dark: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [
    FeatureFlagDecorator({ isAppRedesigned: false }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const LightList: Story = {
  args: { view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const DarkList: Story = {
  args: { view: ArticleView.LIST },
  decorators: [
    FeatureFlagDecorator({ isAppRedesigned: false }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const LightIsLoading: Story = {
  args: { isLoading: true, view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const DarkIsLoading: Story = {
  args: { isLoading: true, view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const LightIsLoadingList: Story = {
  args: { isLoading: true, view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
export const DarkIsLoadingList: Story = {
  args: { isLoading: true, view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: false }),
  ],
};
// Redesigned
export const LightRedesigned: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const DarkRedesigned: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [
    FeatureFlagDecorator({ isAppRedesigned: true }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const LightListRedesigned: Story = {
  args: { view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const DarkListRedesigned: Story = {
  args: { view: ArticleView.LIST },
  decorators: [
    FeatureFlagDecorator({ isAppRedesigned: true }),
    ThemeDecorator(Theme.DARK),
  ],
};
export const LightIsLoadingRedesigned: Story = {
  args: { isLoading: true, view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const DarkIsLoadingRedesigned: Story = {
  args: { isLoading: true, view: ArticleView.BLOCKS },
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const LightIsLoadingListRedesigned: Story = {
  args: { isLoading: true, view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
export const DarkIsLoadingListRedesigned: Story = {
  args: { isLoading: true, view: ArticleView.LIST },
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
