// story
import type { Meta, StoryObj } from "@storybook/react";
import { MessageCard } from "./MessageCard";

const meta = {
  title: "pages/mhw-pages/MessageCard/Example",
  component: MessageCard,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    error: "None",
  },
} satisfies Meta<typeof MessageCard>;

export default meta;

type Story = StoryObj<typeof MessageCard>;

export const InitialRender: Story = {
  args: {
    isProcessing: true,
    broadcastDate: "2024-11-22",
  },
};

export const VerifiedBroadcastDate: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
  },
};

export const HindiMessageError: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
    error: "Hindi message",
  },
};

export const EnglishMessageError: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
    error: "English message",
  },
};

export const HindAndEnglishMessageError: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
    error: "Hindi & English messages",
  },
};

export const DownloadingHindiMessage: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
    isDownloadingHindiMessage: true,
  },
};

export const DownloadingEnglishMessage: Story = {
  args: {
    isProcessing: false,
    broadcastDate: "2024-11-22",
    isDownloadingEnglishMessage: true,
  },
};
