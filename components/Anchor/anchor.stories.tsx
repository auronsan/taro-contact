import React from 'react';
import { Anchor } from './index';

export default {
  title: 'components/Anchor',
  component: Anchor,
};

export const WithHref = () => <Anchor href="https://example.com">Click Here</Anchor>;

export const WithCustomClassName = () => (
  <Anchor className="custom-class" id="first-child" href="https://example.com">
    Click Here
  </Anchor>
);

export const WithInlineStyles = () => (
  <Anchor style={{ backgroundColor: 'red' }} id="first-child" href="https://example.com">
    Click Here
  </Anchor>
);
