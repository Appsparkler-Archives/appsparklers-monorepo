module.exports = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your app? 😍",
    default: "My Awesome App",
  },
  {
    type: "input",
    name: "shortName",
    message:
      "What is the short name for your app? (for ex. Awesome App is `aa` whereas Cool app is `ca`) 😍",
    default: "mwa",
    validate: (value) => {
      const matchesLowerCase = value.match(/[a-z]/g);
      if (!matchesLowerCase) {
        return "Short name should only contain letters in lower case.  Please try again";
      }
      if (value.length < 2 || value.length > 3) {
        return "Short name should be between 2 and 3 characters. Please try again.";
      }
      return true;
    },
  },
];
