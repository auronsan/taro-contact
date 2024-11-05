import React from 'react';
import { Tabs } from './index';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const Default = () => (
  <Tabs
    tabs={[
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
      { key: 'tab3', label: 'Tab 3' },
    ]}
  >
    <div>Content for Tab 1</div>
    <div>Content for Tab 2</div>
    <div>Content for Tab 3</div>
  </Tabs>
);

export const WithRightContent = () => (
  <Tabs
    tabs={[
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
      { key: 'tab3', label: 'Tab 3' },
    ]}
    rightContent={<div>Right Content</div>}
  >
    <div>Content for Tab 1</div>
    <div>Content for Tab 2</div>
    <div>Content for Tab 3</div>
  </Tabs>
);

export const WithActiveTab = () => (
  <Tabs
    tabs={[
      { key: 'tab1', label: 'Tab 1' },
      { key: 'tab2', label: 'Tab 2' },
      { key: 'tab3', label: 'Tab 3' },
    ]}
    tabKey="activeTab"
  >
    <div>Content for Tab 1</div>
    <div>Content for Tab 2</div>
    <div>Content for Tab 3</div>
  </Tabs>
);
