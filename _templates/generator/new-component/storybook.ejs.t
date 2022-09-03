---
to: src/<%= componentFeature %>/components/<%= componentName %>/<%= componentName %>.stories.tsx
---
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import <%= componentName %> from '.';

export default {
  title: '<%= componentFeature %>/components/<%= componentName %>',
  component: <%= componentName %>,
} as ComponentMeta<typeof <%= componentName %>>;

const Template: ComponentStory<typeof <%= componentName %>> = (args) => <<%= componentName %> {...args} />;

export const Default = Template.bind({});
