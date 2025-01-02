import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import "./output.css";
import { BrowserRouterDecorator } from "../decorators/BrowserRouterDecorator";

const preview: Preview = {
  decorators: [withRouter, BrowserRouterDecorator],
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
