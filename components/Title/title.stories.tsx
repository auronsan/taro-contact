import React from 'react';
import { Title } from './index';

export default {
  title: 'Components/Title',
  component: Title,
};

export const Default = () => <Title>Default Title</Title>;

export const WithCustomClassName = () => (
  <Title className="custom-class">Title with Custom Class Name</Title>
);
