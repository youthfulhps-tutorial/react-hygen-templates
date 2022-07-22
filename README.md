## react-component-template-hygen

### new-component generator

```ejs.t
// _templates/generator/new-component-index.ejs.t

---
to: src/components/<%= domain %>/<%= componentName %>.tsx
---
import React from 'react';
import styled from 'styled-components';

type <%= componentName %>Props = {

};

const Styled<%= componentName %> = styled.<%= componentElement %>`

`;

const <%= componentName %> = ({}: <%= componentName %>Props) => {
  return (
    <Styled<%= componentName %>>

    </ Styled<%= componentName %>>
  )
};

export default <%= componentName %>

```

```shell
~$ hygen generator new-component --componentName Test --componentElement div --domain main
```

### hygen prompt

```js
// /_templates/generator/new-component/prompt.js

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
```

```json
{
  "scripts": {
    ...
    "create-component": "hygen generator new-component with-prompt"
  }
}
```

```shell
~$ yarn create-component
```

### Reference

[Hygen을 이용한 컴포넌트 템플릿 만들기](https://techblog.woowahan.com/8268/)
