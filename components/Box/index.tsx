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

  // margin-top
  mt?: number;

  // padding
  p?: number;

  // padding-x
  px?: number;

  // padding-y
  py?: number;

  // onclick
  onClick?: MouseEventHandler;

  // role
  role?: string;

  id?: string;
};

export const Box = ({
  children,
  className = '',
  component = 'div',
  flex,
  style,
  m,
  p,
  px,
  py,
  mt,
  role,
  id,
  ...rest
}: BoxProps) => {
  const Component = component;

  return (
    <Component
      {...(className ? { className } : {})}
      role={role}
      id={id}
      data-testid={id}
      style={{
        flex,
        ...style,
        ...(typeof m === 'number' ? { margin: `${m}px` } : {}),
        ...(typeof p === 'number' ? { padding: `${p}px` } : {}),
        ...(typeof px === 'number' ? { paddingLeft: `${px}px`, paddingRight: `${px}px` } : {}),
        ...(typeof py === 'number' ? { paddingTop: `${py}px`, paddingBottom: `${py}px` } : {}),
        ...(typeof mt === 'number' ? { marginTop: `${mt}px` } : {}),
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};
