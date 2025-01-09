// story

import type { Meta, StoryObj } from "@storybook/react";
import { AlertMessage } from "./AlertMessage";
import { fn } from "@storybook/test";

const meta = {
  title: "Pages/Home Page/Alert Message",
  component: AlertMessage,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof AlertMessage>;

export default meta;

type Story = StoryObj<typeof AlertMessage>;

export const Primary: Story = {};
Primary.storyName = "Alert Message";
