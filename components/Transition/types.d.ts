export interface TransitionStyles {
  common?: React.CSSProperties;
  in: React.CSSProperties;
  out: React.CSSProperties;
  transitionProperty: React.CSSProperties['transitionProperty'];
}
export type TransitionName = 'fade' | 'fade-down' | 'fade-up';

export type Transition = TransitionName | TransitionStyles;
