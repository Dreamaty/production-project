import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { NotificationList } from './NotificationList';

const meta = {
  title: 'entities/notification/NotificationList',
  component: NotificationList,
  decorators: [StoreDecorator({})],
  parameters: {
    layout: 'fullscreen',
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [
          {
            id: '1',
            title: 'Notification',
            description: 'This is very important notification',
          },
          {
            id: '2',
            title: 'Notification 2',
            description: 'Behind your back!!!',
          },
          {
            id: '3',
            title: 'Notification 3',
            description:
              "You are cool and don't forget to sign up here!!!",
          },
        ],
      },
    ],
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NotificationList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
