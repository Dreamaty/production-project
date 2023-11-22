import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { UiText } from './UiText';

const meta = {
  title: 'shared/Text',
  component: UiText,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UiText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
  },
};
// Alignment
export const AlignRight: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    align: 'right',
  },
};
export const AlignCenter: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    align: 'center',
  },
};
// Sizes
export const SizeS: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    size: 'small',
  },
};
export const SizeL: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    size: 'large',
  },
};
export const SizeXL: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    size: 'xlarge',
  },
};

export const Error: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
    variant: 'error',
  },
};
export const OnlyTitle: Story = {
  args: { title: 'Title lorem ipsum' },
};
export const OnlyText: Story = {
  args: { text: 'TextTextTextTextTextTextText' },
};
export const Dark: Story = {
  args: {
    title: 'Title lorem ipsum',
    text: 'TextTextTextTextTextTextText',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTitleDark: Story = {
  args: { title: 'Title lorem ipsum' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const OnlyTextDark: Story = {
  args: { text: 'TextTextTextTextTextTextText' },
  decorators: [ThemeDecorator(Theme.DARK)],
};
