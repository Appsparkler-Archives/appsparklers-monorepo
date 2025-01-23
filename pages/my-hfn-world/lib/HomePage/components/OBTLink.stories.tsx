import type { Meta, StoryObj } from "@storybook/react";
import { OBTLink } from "./OBTLink";

const meta = {
	title: "Pages/Home Page/OBT Link",
	component: OBTLink,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof OBTLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "OBT Link";
