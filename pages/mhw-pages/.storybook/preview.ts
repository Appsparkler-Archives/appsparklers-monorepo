import type { Preview } from "@storybook/react";
import "./output.css";
import { BrowserRouterDecorator } from "./decorators/BrowserRouterDecorator";

const preview: Preview = {
  decorators: [BrowserRouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
