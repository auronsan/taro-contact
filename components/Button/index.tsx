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

  // flex
  flex?: number;

  style?: React.CSSProperties;
};

export const Button = ({
  children,
  className,
  c = 'primary',
  v = 'filled',
  flex,
  style,
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
    style={{
      ...(flex ? { flex } : {}),
      ...style,
    }}
    {...rest}
  >
    {children}
  </button>
);
