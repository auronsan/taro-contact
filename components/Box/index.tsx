import { MouseEventHandler } from 'react';

/**
 * Props for the Box component.
 */
export type BoxProps = {
  /** Class added to the root element, if applicable */
  className?: string;
  /** Inline style added to root component element*/
  style?: React.CSSProperties;
  /** The component to render as the root element. Defaults to 'div'. */
  component?: keyof JSX.IntrinsicElements;
  /** The content to be rendered inside the component. */
  children?: React.ReactNode;

  /** The flex value for the component. */
  flex?: number;

  /** The margin value for the component. */
  m?: number;

  /** The padding value for the component. */
  p?: number;

  /** The padding-x value for the component. */
  px?: number;

  /** The padding-y value for the component. */
  py?: number;

  /** The margin-top value for the component. */
  mt?: number;

  /** The role attribute for the component. */
  role?: string;

  /** The ID attribute for the component. */
  id?: string;

  /** Function to be called when the component is clicked. */
  onClick?: MouseEventHandler;
};

/**
 * Box component.
 * @param props - The props for the component.
 * @returns The rendered component.
 */
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
  onClick,
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
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  );
};
