import React from 'react';
import { Group } from '@/components/Group';
import { Popover } from './index';

export default {
  title: 'components/Popover',
  component: Popover,
};

export const Default = () => (
  <Group justify="center">
    <Popover target="Target" targetId="popover-target">
      <p>Popover content goes here</p>
    </Popover>
  </Group>
);
