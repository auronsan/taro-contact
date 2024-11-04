import { MouseEventHandler } from 'react';

export type BoxProps = {
  /** Class added to the root element, if applicable */
  className?: string;
  /** Inline style added to root component element*/
  style?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;

  // flexbox
  flex?: number;

  // margin
  m?: number;
  // padding
  p?: number;

  // onclick
  onClick?: MouseEventHandler;
};

export const Box = ({
  children,
  className = '',
  component = 'div',
  flex,
  style,
  m,
  p,
  ...rest
}: BoxProps) => {
  const Component = component;

  return (
    <Component
      {...(className ? { className } : {})}
      style={{
        flex,
        ...(typeof m === 'number' ? { margin: `${m}px` } : {}),
        ...(typeof p === 'number' ? { padding: `${p}px` } : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
