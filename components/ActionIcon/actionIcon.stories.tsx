import React from 'react';
import { ActionIcon } from './index';

export default {
  title: 'components/ActionIcon',
  component: ActionIcon,
};

export const withOnClick = () => <ActionIcon onClick={() => {}}>Click Me</ActionIcon>;
