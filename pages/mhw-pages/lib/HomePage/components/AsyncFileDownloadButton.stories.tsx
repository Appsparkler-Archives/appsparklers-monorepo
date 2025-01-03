import type { Meta, StoryObj } from "@storybook/react";
import { AsyncFilieDownloadButton } from "./AsyncFilieDownloadButton";

const meta = {
  title: "Pages/Home Page/Async File Download Button",
  component: AsyncFilieDownloadButton,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof AsyncFilieDownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Async File Download Button";
