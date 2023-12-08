import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { CountrySelect } from './CountrySelect';

const meta = {
  title: 'entities/country/CountrySelect',
  component: CountrySelect,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof CountrySelect>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
  decorators: [FeatureFlagDecorator({ isAppRedesigned: false })],
};
export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    FeatureFlagDecorator({ isAppRedesigned: false }),
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
