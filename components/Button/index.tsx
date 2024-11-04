import { DOMAttributes } from 'react';
import clsx from 'clsx';
import classes from './button.module.css';

export type ButtonProps = DOMAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
  // color
  c?: 'primary' | 'red' | 'yellow';

  // variant
  v?: 'outline' | 'filled';
};

export const Button = ({
  children,
  className,
  c = 'primary',
  v = 'filled',
  ...rest
}: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      classes.root,
      {
        [classes[`button-${c}`]]: !!c,
        [classes[`button-variant-${v}`]]: !!v,
      },
      className
    )}
    {...rest}
  >
    {children}
  </button>
);
