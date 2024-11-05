import React from 'react';
import { Group } from './index';

export default {
  title: 'components/Group',
  component: Group,
};

export const Default = () => (
  <Group>
    <div>Child 1</div>
    <div>Child 2</div>
  </Group>
);

export const WithProps = () => (
  <Group justify="center" wrap="wrap" gap="md" p={16} mb={8} fullWidth>
    <div>Child 1</div>
    <div>Child 2</div>
  </Group>
);
