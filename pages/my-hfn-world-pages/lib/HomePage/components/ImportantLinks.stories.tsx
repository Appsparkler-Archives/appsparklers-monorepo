import type { Meta, StoryObj } from "@storybook/react";
import { ImportantLinks } from "./ImportantLinks";

const meta = {
	title: "Pages/Home Page/Important Links",
	component: ImportantLinks,
	parameters: {
		layout: "fullscreen",
	},
	args: {},
} satisfies Meta<typeof ImportantLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Important Links";
