import React from 'react';
import clsx from 'clsx';
import { getGradient } from '@/helpers/get-gradient';
import classes from './text.module.css';

export type TextProps = {
  children: React.ReactNode;
  component?: keyof JSX.IntrinsicElements;
  gradient?: { from: string; to: string; deg?: number };
  style?: React.CSSProperties;
  // text-align
  ta?: 'center' | 'right' | 'left' | 'justify';
  // font-size
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';
};

export const Text = ({
  children,
  component = 'span',
  gradient,
  ta = 'left',
  size = 'md',
  style,
  ...rest
}: TextProps) => {
  const Component = component;

  const innerStyle = gradient ? { backgroundImage: getGradient(gradient) } : {};

  return (
    <Component
      className={clsx({
        [classes.text]: true,
        [classes['text-gradient']]: gradient,
        [classes[`ta-${ta}`]]: ta === 'center',
        [classes[`fs-${size}`]]: !!size,
      })}
      style={{
        ...style,
        ...innerStyle,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
