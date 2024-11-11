/**
 * The styles for a transition.
 */
export interface TransitionStyles {
  /**
   * The common CSS styles for the transition.
   */
  common?: React.CSSProperties;

  /**
   * The CSS styles for the transition when it is entering.
   */
  in: React.CSSProperties;

  /**
   * The CSS styles for the transition when it is exiting.
   */
  out: React.CSSProperties;

  /**
   * The CSS property to transition.
   */
  transitionProperty: React.CSSProperties['transitionProperty'];
}

/**
 * The names of the available transitions.
 */
export type TransitionName = 'fade' | 'fade-down' | 'fade-up';

/**
 * The type for a transition.
 * Can be either a predefined transition name or a custom transition styles.
 */
export type Transition = TransitionName | TransitionStyles;

/**
 * The available transitions.
 */
export const transitions: Record<TransitionName, TransitionStyles> = {
  /**
   * The fade transition.
   */
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: 'opacity',
  },

  /**
   * The fade-up transition.
   */
  'fade-up': {
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(30px)' },
    transitionProperty: 'opacity, transform',
  },

  /**
   * The fade-down transition.
   */
  'fade-down': {
    in: { opacity: 1, transform: 'translateY(0)' },
    out: { opacity: 0, transform: 'translateY(30px)' },
    transitionProperty: 'opacity, transform',
  },
};
