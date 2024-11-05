import React from 'react';
import { HamburgerMenu } from './index';

export default {
  title: 'components/HamburgerMenu',
  component: HamburgerMenu,
};

export const Default = () => <HamburgerMenu menu={<div>Menu Content</div>} />;

export const WithOpen = () => <HamburgerMenu menu={<div>Menu Content</div>} />;
