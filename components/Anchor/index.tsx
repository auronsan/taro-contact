import React, { ReactNode } from 'react';
import clsx from 'clsx';
import classes from './anchor.module.css';

/**
 * Props for the Anchor component.
 */
type AnchorProps = {
  /**
   * The URL that the anchor tag should link to.
   */
  href: string;
  /**
   * The content to be rendered inside the anchor tag.
   */
  children: ReactNode;
  /**
   * The font size of the anchor tag.
   * - 'inherit': inherit the font size from the parent element.
   * - 'xs': extra small font size.
   * - 'sm': small font size.
   * - 'md': medium font size.
   * - 'lg': large font size.
   */
  size?: 'inherit' | 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Additional CSS class names to be applied to the anchor tag.
   */
  className?: string;
  /**
   * Additional CSS styles to be applied to the anchor tag.
   */
  style?: React.CSSProperties;
  /**
   * ID attribute for the anchor tag.
   */
  id?: string;
};

/**
 * Anchor component.
 * @param props - The props for the component.
 * @returns The rendered component.
 */
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
