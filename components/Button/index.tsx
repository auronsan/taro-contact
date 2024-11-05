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

  id?: string;

  type?: 'button' | 'submit';
};

export const Button = ({
  children,
  className,
  c = 'primary',
  v = 'filled',
  flex,
  style,
  id,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
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
    data-testid={id}
    id={id}
    {...rest}
  >
    {children}
  </button>
);
