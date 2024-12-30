import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    className: "btn btn-primary",
    children: "Hello World",
  },
};

export const Secondary: Story = {
  args: {
    className: "btn btn-secondary",
    children: "Hello World",
  },
};

export const ExtraSmall: Story = {
  args: {
    className: "btn btn-secondary btn-xs",
    children: "Hello World",
  },
};

export const Small: Story = {
  args: {
    className: "btn btn-secondary btn-sm",
    children: "Hello World",
  },
};

export const Normal: Story = {
  args: {
    className: "btn btn-secondary",
    children: "Hello World",
  },
};

export const Large: Story = {
  args: {
    className: "btn btn-secondary btn-lg",
    children: "Hello World",
  },
};
