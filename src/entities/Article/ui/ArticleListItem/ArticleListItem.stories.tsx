import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleView } from '../../model/consts/consts';
import { articleForTesting } from '../../test/exampleData';
import { ArticleListItem } from './ArticleListItem';

const meta = {
  title: 'entities/article/ArticleListItem/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    article: articleForTesting,
  },
} satisfies Meta<typeof ArticleListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const BlockLight: Story = {
  args: { view: ArticleView.BLOCKS },
};
export const BlockDark: Story = {
  args: { view: ArticleView.BLOCKS },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const ListLight: Story = {
  args: { view: ArticleView.LIST },
};
export const ListDark: Story = {
  args: { view: ArticleView.LIST },
  decorators: [ThemeDecorator(Theme.DARK)],
};
