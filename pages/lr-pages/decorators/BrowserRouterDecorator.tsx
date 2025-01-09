import React from "react";
import { BrowserRouter } from "react-router-dom";
export const BrowserRouterDecorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
