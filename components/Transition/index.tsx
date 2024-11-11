import React from 'react';
import { getTransitionStyles } from './get-transition-styles';
import type { TransitionName } from './transition';

/**
 * Props for the Transition component.
 */
export type TransitionProps = {
  /**
   * The name of the transition to use.
   */
  transition: TransitionName;

  /**
   * The children of the Transition component.
   * @param transitionStyles - The CSS styles for the transition.
   * @returns The rendered children of the Transition component.
   */
  children: (transitionStyles: React.CSSProperties) => React.ReactNode;

  /**
   * Whether the transition is visible or not.
   */
  visible?: boolean;
};

/**
 * Transition component.
 * @param props - The props for the component.
 * @returns The rendered Transition component.
 */
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
