## react-boilerplate-with-hygen

## hygen

hygen은 fs-extra와 같은 npm 패키지를 기반으로 파일 시스템에
접근하여 생성해둔 템플릿을 기반으로 파일을 추가하는 작업을 자동화할 수 있도록 도와주는 도구이다.

리엑트 프로젝트에서 반복적으로 사용되는 템플릿 생성을 자동화하여
약속된 컨벤션을 유지하며 파일을 생성할 수 있으며, 생산성을 향상시킬 수 있다.

## install

```shell
~$ yarn global add hygen
```

## init

hygen을 init하여 프로젝트 루트에 `/_templates` 디렉토리를 생성한다.
(직접 폴더를 생성해도 무관하다.)

```shell
~$ hygen init self
```

## init template

`/_templates/generator/new/hello.ejs.t`의 파일은 다음과 같이 구성되어 있다.

````ejs.t
---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
---
---
to: app/hello.js
---
const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(hello)
````

시작부는 파일이 생성될 위치를 정의하며, 본문은 생성될 파일 안에 들어갈 본문이다.
템플릿은 ejs 문법을 사용하여 `<%= name %>`의 형식으로 프롬프트로부터 값을 전달받아 구문을 생성할 수 있다.

```shell
~$ hygen generator new --name test --action task
```

## new-component generator

컴포넌트 초기 파일 구성을 생성하는 템플릿을 만들어보자.

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

## hygen prompt

hygen은 CLI 상호 작용을 지원하는 enquirer를 내장하고 있다.
프롬프트를 통해 템플릿에 전달해야 하는 값들을 입력받을 수 있는
인터페이스를 구축할 수 있으며, 간단한 메세지를 전달하여 값의 사용처를
전달하거나, 값의 유효성 검사를 추가하여 관련 값을 처리해줄 수 있다.

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

## Reference

[Hygen을 이용한 컴포넌트 템플릿 만들기](https://techblog.woowahan.com/8268/)
