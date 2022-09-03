const { readdirSync } = require("fs");

const getFeatures = () => {
  return readdirSync("./src/", { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

module.exports = {
  prompt: async ({ prompter }) => {
    const features = getFeatures();

    const NEW_DOMAIN_OPTION = "Create New Feature";

    let componentFeature = await prompter.select({
      type: "input",
      name: "componentFeature",
      message: "컴포넌트 도메인을 선택하세요.",
      choices: [...features, NEW_DOMAIN_OPTION],
    });

    if (componentFeature === NEW_DOMAIN_OPTION) {
      const { newComponentFeature } = await prompter.prompt({
        type: "input",
        name: "newComponentFeature",
        message: "새롭게 생성할 컴포넌트 도메인을 입력하세요.",
      });

      componentFeature = newComponentFeature;
    }

    const { componentName } = await prompter.prompt({
      type: "input",
      name: "componentName",
      message: "컴포넌트 이름을 입력하세요. (PascalCase)",
    });

    const { componentElement } = await prompter.prompt({
      type: "input",
      name: "componentElement",
      message: "컴포넌트의 최상단 태그를 입력하세요. (ex. div, span,..)",
    });

    return { componentName, componentElement, componentFeature };
  },
};
