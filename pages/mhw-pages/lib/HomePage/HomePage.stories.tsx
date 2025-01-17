import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./HomePage";
import { fn } from "@storybook/test";

const meta = {
	title: "Pages/Home Page/Home Page",
	component: HomePage,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onChangeBroadcastDate: fn(),
		messageLink: "https://www.appsparklers.com",
		messageDate: "2024-11-22",
		onFileDownloadError: fn(),
	},
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithDate: Story = {};
export const WithoutDate: Story = {
	args: {
		messageDate: undefined,
	},
};
