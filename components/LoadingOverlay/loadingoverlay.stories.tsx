import React from 'react';
import { LoadingOverlay } from './index';

export default {
  title: 'components/LoadingOverlay',
  component: LoadingOverlay,
};

export const Default = () => <LoadingOverlay visible />;

export const Hidden = () => <LoadingOverlay visible={false} />;
