import React from 'react';
import { Button } from '@/components/Button';
import { Transition } from './index';

export default {
  title: 'components/Transition',
  component: Transition,
};

export const Default = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>Toggle Transition</Button>
      <Transition transition="fade" visible={visible}>
        {(transitionStyles) => (
          <div style={transitionStyles}>
            <h1>Transition Component</h1>
          </div>
        )}
      </Transition>
    </>
  );
};
