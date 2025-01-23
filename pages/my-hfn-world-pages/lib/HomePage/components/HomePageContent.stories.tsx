import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { HomePageContent } from "./HomePageContent";

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
