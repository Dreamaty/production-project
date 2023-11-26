import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleType } from '@/entities/Article';
import { ArticleSortField } from '@/features/Article';

import { ArticlesFilters } from './ArticlesFilters';

const meta = {
  title: 'widget/ArticlesFilters',
  component: ArticlesFilters,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    order: 'asc',
    search: 'You can type here...',
    sort: ArticleSortField.CREATED,
    type: ArticleType.ALL,
  },
} satisfies Meta<typeof ArticlesFilters>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
