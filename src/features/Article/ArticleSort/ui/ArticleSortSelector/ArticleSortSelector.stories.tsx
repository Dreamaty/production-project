import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleSortField } from '../../model/consts/consts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'features/article/ArticleSortSelector',
  component: ArticleSortSelector,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    order: 'asc',
    sort: ArticleSortField.CREATED,
  },
} satisfies Meta<typeof ArticleSortSelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
