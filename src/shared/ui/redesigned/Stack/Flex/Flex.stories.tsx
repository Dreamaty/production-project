import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

const meta = {
  title: 'shared/redesigned/Flex',
  component: Flex,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: (
      <>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </>
    ),
  },
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Row: Story = {
  args: {},
};

export const RowGap4: Story = {
  args: {
    gap: '4',
  },
};
export const RowGap8: Story = {
  args: {
    gap: '8',
  },
};
export const RowGap16: Story = {
  args: {
    gap: '16',
  },
};
export const RowGap32: Story = {
  args: {
    gap: '32',
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
  },
};
export const JustifyCenter: Story = {
  args: {
    justify: 'center',
  },
};
export const JustifyEnd: Story = {
  args: {
    justify: 'end',
  },
};
export const JustifyBetween: Story = {
  args: {
    justify: 'between',
  },
};

export const AlignStart: Story = {
  args: {
    align: 'start',
  },
};
export const AlignEnd: Story = {
  args: {
    align: 'end',
  },
};
