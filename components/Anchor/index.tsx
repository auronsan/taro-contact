import React, { ReactNode } from 'react';
import clsx from 'clsx';
import classes from './anchor.module.css';

type AnchorProps = {
  href: string;
  children: ReactNode;
  // font-size
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';
};

export const Anchor: React.FC<AnchorProps> = ({ href, children, size }) => (
  <a href={href} className={clsx({ [classes.root]: true, [classes[`fs-${size}`]]: !!size })}>
    {children}
  </a>
);
