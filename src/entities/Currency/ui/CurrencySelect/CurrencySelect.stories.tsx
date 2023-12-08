import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { CurrencySelect } from './CurrencySelect';

const meta = {
  title: 'entities/currency/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CurrencySelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
  decorators: [FeatureFlagDecorator({})],
};
export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({}),
  ],
};
export const LightRedesigned: Story = {
  args: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: true })],
};
export const DarkRedesigned: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: true }),
  ],
};
