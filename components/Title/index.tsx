import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './title.module.css';

/**
 * Props for the Title component.
 */
export type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  /**
   * The class name for the Title component.
   */
  className?: string;
};

/**
 * Title component.
 * @param props - The props for the component.
 * @returns The rendered Title component.
 */
export const Title = ({ children, className, ...rest }: TitleProps) => (
  <h2 className={clsx(classes.title, className)} {...rest}>
    {children}
  </h2>
);
