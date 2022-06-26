module.exports = {
  prompt: ({ prompter }) => {
    const questions = [
      {
        type: "input",
        name: "domain",
        message: "Enter domain",
      },
      {
        type: "input",
        name: "componentName",
        message: "Enter component name (PascalCase)",
      },
      {
        type: "input",
        name: "componentElement",
        message: "Enter component element (ex. div, span,..)",
      },
    ];
    return prompter.prompt(questions).then((answers) => {
      return { ...answers };
    });
  },
};