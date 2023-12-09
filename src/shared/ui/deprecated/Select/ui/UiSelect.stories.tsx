import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { UiSelect } from './UiSelect';

const meta = {
  title: 'shared/deprecated/UiSelect',
  component: UiSelect,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UiSelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {
    label: 'Please select something here',
    options: [
      { value: '123', content: 'First name' },
      { value: '1234', content: 'Second name' },
    ],
  },
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
