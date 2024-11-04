import React from 'react';
import { getTransitionStyles } from './get-transition-styles';
import { TransitionName } from './types';

export type TransitionProps = {
  transition: TransitionName;
  children: (transitionStyles: React.CSSProperties) => React.ReactNode;
  visible?: boolean;
};

export const Transition = (props: TransitionProps) => {
  const { children, transition, visible } = props;

  const transitionStyles = getTransitionStyles({
    transition,
    state: visible ? 'entering' : 'exiting',
    duration: 300,
    timingFunction: 'ease',
  });

  return <>{children(transitionStyles)}</>;
};
