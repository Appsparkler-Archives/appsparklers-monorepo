import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { AsyncFileDownloadButton } from "./AsyncFileDownloadButton";

const meta = {
	title: "Pages/Home Page/Async File Download Button",
	component: AsyncFileDownloadButton,
	parameters: {
		layout: "fullscreen",
	},
	args: {
		// pdfDownloadLink: "http://babujishriramchandra.fr/pdfs/Reality_at_Dawn.pdf",
		pdfDownloadLink:
			"https://firebasestorage.googleapis.com/v0/b/my-hfn.firebasestorage.app/o/messages%2F2025-01-04.pdf?alt=media&token=87317045-471f-4933-a69c-52bbe4de1983",
		onFileDownloadError: fn(),
		isCheckingForFile: false,
		messageBroadcastDate: "2025-01-01",
	},
} satisfies Meta<typeof AsyncFileDownloadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: meta.args,
};
Primary.storyName = "Async File Download Button";
