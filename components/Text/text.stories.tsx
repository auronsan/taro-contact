import React from 'react';
import { Text } from './index';

export default {
  title: 'components/Text',
  component: Text,
};

export const Default = () => <Text>Default Text</Text>;

export const WithGradient = () => (
  <Text gradient={{ from: '#000000', to: '#ffffff' }}>Text with Gradient</Text>
);

export const WithTextAlign = () => <Text ta="center">Center Aligned Text</Text>;

export const WithFontSize = () => <Text size="lg">Large Font Size Text</Text>;

export const WithFontWeight = () => <Text fw="bold">Bold Font Weight Text</Text>;

export const WithColor = () => <Text c="#ff0000">Red Color Text</Text>;
