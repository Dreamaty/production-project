import type { Meta, StoryObj } from '@storybook/react';

import { FeatureFlagDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          firstName: 'Obi',
          lastName: 'Kenobi',
          age: 33,
          city: 'Tatuin',
          country: Country.Ukraine,
          currency: Currency.USD,
          avatar:
            'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg',
        },
      },
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
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
