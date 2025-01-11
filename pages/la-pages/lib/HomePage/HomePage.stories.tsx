import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./HomePage";

const meta = {
  title: "Pages/Home Page",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

Default.storyName = "Home Page";
