import type { Meta, StoryObj } from "@storybook/react";
import { PrivacyPolicyLink } from "./PrivacyPolicyLink";

const meta = {
	title: "Pages/Home Page/Privacy Policy Link",
	component: PrivacyPolicyLink,
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof PrivacyPolicyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Privacy Policy Link";
