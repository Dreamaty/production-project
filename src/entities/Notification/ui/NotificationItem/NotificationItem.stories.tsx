import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationItem } from './NotificationItem';

const meta = {
  title: 'entities/notification/NotificationItem',
  component: NotificationItem,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    notification: {
      description: 'This is very interesting notification',
      id: '1',
      title: 'You need to look at it',
    },
  },
} satisfies Meta<typeof NotificationItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
