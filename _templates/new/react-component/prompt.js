module.exports = [
  {
    type: "select",
    name: "project",
    message: "Where do you want to create your component?",
    choices: ["apps/mhw-app", "pages/mhw-pages"],
  },
  {
    type: "select",
    name: "type",
    message: "lib or src?",
    choices: ["lib", "src"],
  },
  {
    type: "input",
    name: "componentName",
    message: "What is your component name?",
    default: "MyComponent",
  },
  {
    type: "input",
    name: "storyName",
    message: "What is your story name?",
    default: "My Component",
  },
];
