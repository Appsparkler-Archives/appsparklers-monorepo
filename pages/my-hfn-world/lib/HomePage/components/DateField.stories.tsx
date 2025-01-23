import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { DateField } from "./DateField";

const meta = {
	title: "Pages/Home Page/Date Field",
	component: DateField,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		onChangeDate: fn(),
		isCheckingForFile: false,
		broadcastDate: "2024-11-22",
	},
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Date Field";
