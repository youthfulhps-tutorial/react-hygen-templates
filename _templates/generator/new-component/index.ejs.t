---
to: src/<%= componentFeature %>/components/<%= componentName %>/index.tsx
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


