import React from 'react';
import { Button } from './index';

export default {
  title: 'components/Button',
  component: Button,
};

export const withOnClick = () => <Button onClick={() => {}}>Click Me</Button>;

export const withChildren = () => <Button>Click Me</Button>;

export const withCustomClassName = () => <Button className="custom-class">Click Me</Button>;

export const withRedColor = () => <Button c="red">Click Me</Button>;

export const withOutlineVariant = () => <Button v="outline">Click Me</Button>;

export const withFlexStyle = () => <Button flex={2}>Click Me</Button>;
