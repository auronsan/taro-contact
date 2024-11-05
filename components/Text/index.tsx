import React from 'react';
import clsx from 'clsx';
import { getGradient } from '@/helpers/get-gradient';
import classes from './text.module.css';

export type TextProps = {
  children: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  gradient?: { from: string; to: string; deg?: number };
  style?: React.CSSProperties;
  // text-align
  ta?: 'center' | 'right' | 'left' | 'justify';
  // font-size
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';

  // onClick
  onClick?: () => void;

  // color
  c?: string;

  // font-weight
  fw?: 'normal' | 'bold';
};

export const Text = ({
  children,
  className,
  component = 'span',
  gradient,
  ta = 'left',
  size = 'md',
  fw,
  style,
  c,
  ...rest
}: TextProps) => {
  const Component = component;

  const innerStyle = gradient ? { backgroundImage: getGradient(gradient) } : {};

  return (
    <Component
      className={clsx(className, {
        [classes.text]: true,
        [classes['text-gradient']]: gradient,
        [classes[`ta-${ta}`]]: ta === 'center',
        [classes[`fs-${size}`]]: !!size,
        [classes[`fw-${fw}`]]: !!fw,
      })}
      style={{
        ...style,
        ...(c ? { color: c } : {}),
        ...innerStyle,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
