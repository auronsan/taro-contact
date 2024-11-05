import { transitions } from './transition';
import type { Transition } from './transition';

const transitionStatuses = {
  entering: 'in',
  entered: 'in',
  exiting: 'out',
  exited: 'out',
  'pre-exiting': 'out',
  'pre-entering': 'out',
} as const;

export function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction,
}: {
  transition: Transition;
  state: keyof typeof transitionStatuses;
  duration: number;
  timingFunction: React.CSSProperties['transitionTimingFunction'];
}): React.CSSProperties {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction,
  };

  if (typeof transition === 'string') {
    if (!(transition in transitions)) {
      return {};
    }

    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition][transitionStatuses[state]],
    };
  }

  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition[transitionStatuses[state]],
  };
}
