import type { Meta, StoryObj } from "@storybook/react";
import { AWATAndAQLink } from "./AWATAndAQLink";

const meta = {
	title: "Pages/Home Page/A Word, A Though And A Question Link",
	component: AWATAndAQLink,
	parameters: {
		layout: "fullscreen",
	},
	args: {},
} satisfies Meta<typeof AWATAndAQLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "A Word, A Though And A Question Link";
