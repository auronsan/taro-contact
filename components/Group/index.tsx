import clsx from 'clsx';
import { Box } from '@/components/Box';
import type { BoxProps } from '@/components/Box';
import classes from './group.module.css';

type GroupProps = {
  justify?: 'center' | 'space-between' | 'end';
  wrap?: 'wrap' | 'nowrap';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  // padding
  p?: number;
  // margin-bottom
  mb?: number;
} & BoxProps;

export const Group = ({
  children,
  className,
  justify,
  wrap,
  gap = 'sm',
  p,
  mb,
  ...restProps
}: GroupProps) => (
  <Box
    className={clsx(className, classes.root, {
      [classes[`justify-${justify}`]]: !!justify,
      [classes[`group-${wrap}`]]: !!wrap,
      [classes[`gap-${gap}`]]: !!gap,
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
