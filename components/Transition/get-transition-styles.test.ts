import { getTransitionStyles } from './get-transition-styles';
import { transitions } from './transition';

describe('getTransitionStyles', () => {
  it('should return the correct transition styles for a string transition', () => {
    const result = getTransitionStyles({
      transition: 'fade',
      state: 'entering',
      duration: 300,
      timingFunction: 'ease',
    });

    expect(result).toEqual({
      transitionProperty: transitions.fade.transitionProperty,
      transitionDuration: '300ms',
      transitionTimingFunction: 'ease',
      ...transitions.fade.in,
    });
  });
});
