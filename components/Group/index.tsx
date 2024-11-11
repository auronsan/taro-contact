import clsx from 'clsx';
import { Box } from '@/components/Box';
import type { BoxProps } from '@/components/Box';
import classes from './group.module.css';

/**
 * Props for the Group component.
 */
type GroupProps = {
  /** The justification of the group's children. */
  justify?: 'center' | 'space-between' | 'end';

  /** The wrapping behavior of the group's children. */
  wrap?: 'wrap' | 'nowrap';

  /** The gap between the group's children. */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /** The padding of the group. */
  p?: number;

  /** The margin-bottom of the group. */
  mb?: number;

  /** Whether the group should take up 100% of its parent's width. */
  fullWidth?: boolean;
} & BoxProps;

/**
 * Group component.
 * @param props - The props for the component.
 * @returns The rendered group.
 */
export const Group = ({
  children,
  className,
  justify,
  wrap,
  gap = 'sm',
  p,
  mb,
  fullWidth,
  ...restProps
}: GroupProps) => (
  <Box
    className={clsx(className, classes.root, {
      [classes[`justify-${justify}`]]: !!justify,
      [classes[`group-${wrap}`]]: !!wrap,
      [classes[`gap-${gap}`]]: !!gap,
      [classes.fullWidth]: !!fullWidth,
    })}
    style={{
      ...(typeof p === 'number' ? { padding: `${p}px` } : {}),
      ...(typeof mb === 'number' ? { marginBottom: `${mb}px` } : {}),
    }}
    {...restProps}
  >
    {children}
  </Box>
);
