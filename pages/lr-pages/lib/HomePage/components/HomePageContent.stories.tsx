import type { Meta, StoryObj } from "@storybook/react";
import { HomePageContent } from "./HomePageContent";
import { fn } from "@storybook/test";

const meta = {
  title: "Pages/Home Page/Home Page Content",
  component: HomePageContent,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onChangeBroadcastDate: fn(),
    onFileDownloadError: fn(),
  },
} satisfies Meta<typeof HomePageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Home Page Content";
