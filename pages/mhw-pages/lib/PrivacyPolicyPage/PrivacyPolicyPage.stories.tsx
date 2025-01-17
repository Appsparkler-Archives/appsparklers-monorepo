import type { Meta, StoryObj } from "@storybook/react";
import { PrivacyPolicyPage } from "./PrivacyPolicyPage";

const meta = {
	title: "Pages/Privacy Policy Page",
	component: PrivacyPolicyPage,
	parameters: {
		layout: "fullscreen",
	},
	args: {},
} satisfies Meta<typeof PrivacyPolicyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePageExample: Story = {};
HomePageExample.storyName = "Privacy Policy Page";
