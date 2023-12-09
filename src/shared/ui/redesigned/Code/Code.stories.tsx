import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Code } from './Code';

const meta = {
  title: 'shared/redesigned/Code',
  component: Code,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text:
      "import type { Meta, StoryObj } from '@storybook/react' \n" +
      "import { Theme } from 'app/providers/ThemeProvider' \n" +
      "import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'\n" +
      "import { Code } from './Code'\n" +
      'const meta = {\n' +
      "	title: 'widget/Code',\n" +
      '	component: Code,\n' +
      '	parameters: {\n' +
      "	layout: 'fullscreen',\n" +
      '},\n' +
      "tags: ['autodocs'],\n" +
      'argTypes: {},\n' +
      'args: {\n',
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
