import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';
import classes from './title.module.css';

export type TitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  className?: string;
};

export const Title = ({ children, className, ...rest }: TitleProps) => (
  <h2 className={clsx(classes.title, className)} {...rest}>
    {children}
  </h2>
);
