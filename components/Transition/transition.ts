import { TransitionName, TransitionStyles } from './types';

export const transitions: Record<TransitionName, TransitionStyles> = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: 'opacity',
  },

  'fade-up': {
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(30px)' },
    transitionProperty: 'opacity, transform',
  },

  'fade-down': {
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(30px)' },
    transitionProperty: 'opacity, transform',
  },
};
