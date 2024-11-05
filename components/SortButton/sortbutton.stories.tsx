import React from 'react';
import { Group } from '@/components/Group';
import { SortButton } from './index';

export default {
  title: 'components/SortButton',
  component: SortButton,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Default = () => (
  <Group justify="center">
    <SortButton />
  </Group>
);
