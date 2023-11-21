import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { MainPage } from '@/pages/MainPage';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { MainLayout } from './MainLayout';

const meta = {
  title: 'shared/layouts/MainLayout',
  component: MainLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    content: <MainPage />,
    header: <Navbar />,
    sidebar: <Sidebar />,
  },
} satisfies Meta<typeof MainLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
