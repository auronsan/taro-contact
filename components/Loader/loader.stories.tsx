import React from 'react';
import { Loader } from './index';

export default {
  title: 'components/Loader',
  component: Loader,
};

export const Default = () => <Loader />;

export const WithProps = () => <Loader className="custom-class" />;
