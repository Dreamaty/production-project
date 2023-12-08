import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleView } from '../../../model/consts/consts';
import { articleForTesting } from '../../../test/exampleData';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta = {
  title:
    'entities/article/ArticleListItem/ArticleListItemDeprecated',
  component: ArticleListItemDeprecated,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    view: ArticleView.LIST,
    article: articleForTesting,
  },
} satisfies Meta<typeof ArticleListItemDeprecated>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightBlocksView: Story = {
  args: { view: ArticleView.BLOCKS },
};
export const DarkBlocksView: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [ThemeDecorator(Theme.DARK)],
};
