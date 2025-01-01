import type { Meta, StoryObj } from "@storybook/react";
import { TenMaximsLink } from "./TenMaximsLink";

const meta = {
  title: "Pages/Home Page/Ten Maxims Link",
  component: TenMaximsLink,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof TenMaximsLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Ten Maxims Link";
