import React from 'react';
import clsx from 'clsx';
import { getGradient } from '@/helpers/get-gradient';
import classes from './text.module.css';

/**
 * Props for the Text component.
 */
export type TextProps = {
  /**
   * The content of the Text component.
   */
  children: React.ReactNode;

  /**
   * The component to render the Text component as.
   */
  component?: keyof JSX.IntrinsicElements;

  /**
   * The class name for the Text component.
   */
  className?: string;

  /**
   * The gradient for the Text component.
   */
  gradient?: { from: string; to: string; deg?: number };

  /**
   * The style for the Text component.
   */
  style?: React.CSSProperties;

  /**
   * The text alignment for the Text component.
   */
  ta?: 'center' | 'right' | 'left' | 'justify';

  /**
   * The font size for the Text component.
   */
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';

  /**
   * The font weight for the Text component.
   */
  fw?: 'normal' | 'bold';

  /**
   * The click event handler for the Text component.
   */
  onClick?: () => void;

  /**
   * The color for the Text component.
   */
  c?: string;
};

/**
 * Text component.
 * @param props - The props for the component.
 * @returns The rendered Text component.
 */
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
