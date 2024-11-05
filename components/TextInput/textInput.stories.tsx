import React from 'react';
import { TextInput } from './index';

export default {
  title: 'components/TextInput',
  component: TextInput,
};

export const Default = () => (
  <TextInput id="default-text-input" name="default" placeholder="Default Text Input" />
);

export const WithLabel = () => (
  <TextInput
    id="labeled-text-input"
    name="labeled"
    label="Labeled Text Input"
    placeholder="Text Input"
  />
);
