import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/redesigned/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {
    width: '100%',
    height: 200,
  },
};
export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
