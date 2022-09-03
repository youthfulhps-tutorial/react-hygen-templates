---
to: src/<%= componentFeature %>/components/<%= componentName %>/<%= componentName %>.test.tsx
---
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import renderer from 'react-test-renderer';
import <%= componentName %> from '.';

describe('', () => {
  beforeAll(() => {
    render(<<%= componentName %> />);
  });

  it('', () => {
  });
});
