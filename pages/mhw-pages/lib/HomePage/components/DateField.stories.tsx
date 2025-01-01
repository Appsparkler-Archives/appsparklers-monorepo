import type { Meta, StoryObj } from "@storybook/react";
import { DateField } from "./DateField";
import { fn } from "@storybook/test";

const meta = {
  title: "Pages/Home Page/Date Field",
  component: DateField,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onChangeDate: fn(),
    disabled: false,
  },
} satisfies Meta<typeof DateField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.storyName = "Date Field";
