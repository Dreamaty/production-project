import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Code } from './Code';

const meta = {
  title: 'shared/deprecated/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text:
      "import type { Meta, StoryObj } from '@storybook/react'" +
      "import { Theme } from 'app/providers/ThemeProvider'" +
      "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'" +
      "import { Code } from './Code'" +
      'const meta = {' +
      "title: 'widget/Code'," +
      'component: Code,' +
      'parameters: {' +
      "layout: 'fullscreen'," +
      '},' +
      "tags: ['autodocs']," +
      'argTypes: {},' +
      'args: {',
  },
} satisfies Meta<typeof Code>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Light: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
