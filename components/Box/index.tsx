import clsx from 'clsx';

export type BoxProps = {
  /** Class added to the root element, if applicable */
  className?: string;
  /** Inline style added to root component element*/
  style?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;

  flex?: number;
};

export const Box = ({
  children,
  className = '',
  component = 'div',
  flex,
  style,
  ...rest
}: BoxProps) => {
  const Component = component;

  return (
    <Component
      className={clsx({
        [className]: !!className,
      })}
      style={{ flex, ...style }}
      {...rest}
    >
      {children}
    </Component>
  );
};
