import React, { ReactNode } from 'react';
import clsx from 'clsx';
import classes from './anchor.module.css';

type AnchorProps = {
  href: string;
  children: ReactNode;
  // font-size
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';

  className?: string;
  style?: React.CSSProperties;

  id?: string;
};

export const Anchor: React.FC<AnchorProps> = (props: AnchorProps) => {
  const { href, children, size, className, style, id } = props;
  return (
    <a
      href={href}
      className={clsx(className, { [classes.root]: true, [classes[`fs-${size}`]]: !!size })}
      style={style}
      id={id}
      data-testid={id}
    >
      {children}
    </a>
  );
};
