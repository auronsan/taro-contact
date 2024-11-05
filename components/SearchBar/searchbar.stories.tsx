import React from 'react';
import { SearchBar } from './index';

export default {
  title: 'components/SearchBar',
  component: SearchBar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Default = () => <SearchBar />;
