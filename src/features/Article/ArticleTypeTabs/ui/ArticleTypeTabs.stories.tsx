import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { ArticleType } from '@/entities/Article';

import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'features/article/ArticleTypeTabs',
  component: ArticleTypeTabs,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: ArticleType.ALL,
  },
} satisfies Meta<typeof ArticleTypeTabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
