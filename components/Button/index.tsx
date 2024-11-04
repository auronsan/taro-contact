import { DOMAttributes } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export type ButtonProps = DOMAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
  // color
  c?: 'primary' | 'red' | 'yellow';
};

export const Button = ({ children, className, c = 'primary', ...rest }: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      classes.root,
      {
        [classes[`button-${c}`]]: !!c,
      },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
