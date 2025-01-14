---
to: <%= project %>/src/components/<%= componentName %>/<%= componentName %>.stories.tsx
---

// story
import type { Meta, StoryObj } from "@storybook/react";
import { <%= componentName %> } from "./<%= componentName %>";
import { fn } from "@storybook/test";

const meta = {
  title: "<%= project %>/<%= componentName %>/<%= storyName %>",
  component: <%= componentName %>,
  parameters: {
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof <%= componentName %>>;

export default meta;

type Story = StoryObj<typeof <%= componentName %>>;

export const Example: Story = {};
Example.storyName = "<%= storyName %>";
