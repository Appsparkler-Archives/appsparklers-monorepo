import type { Meta, StoryObj } from "@storybook/react";
import { MessageLink } from "./MessageLink";

const meta = {
	title: "Pages/Home Page/Message Link",
	component: MessageLink,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		messageBroadcastDate: "2024-11-22",
		pdfDownloadLink: "https://www.appsparklers.com",
		isCheckingForFile: false,
	},
} satisfies Meta<typeof MessageLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Message Link";
