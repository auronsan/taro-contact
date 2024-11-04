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
} & BoxProps;

export const Group = ({ children, justify, wrap, gap = 'sm', p = 0, ...restProps }: GroupProps) => (
  <Box
    className={clsx(classes.root, {
      [classes[`justify-${justify}`]]: !!justify,
      [classes[`group-${wrap}`]]: !!wrap,
      [classes[`gap-${gap}`]]: !!gap,
    })}
    style={{ padding: p }}
    {...restProps}
  >
    {children}
  </Box>
);
