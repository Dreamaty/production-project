import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { EditButton } from './EditButton';

const meta = {
  title: 'shared/redesigned/Button/EditButton',
  component: EditButton,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
  args: {
    onCancelEdit() {},
    onEdit() {},
    onSave() {},
    readonly: true,
  },
} satisfies Meta<typeof EditButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const LightEditMode: Story = {
  args: { readonly: false },
};
export const DarkEditMode: Story = {
  args: {
    readonly: false,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
