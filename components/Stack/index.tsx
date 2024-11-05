import clsx from 'clsx';
import { Box } from '@/components/Box';
import type { BoxProps } from '@/components/Box';
import classes from './stack.module.css';

type StackProps = {
  justify?: 'center' | 'space-between' | 'end';
  wrap?: 'wrap' | 'nowrap';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  // padding
  p?: number;
} & BoxProps;

export const Stack = (props: StackProps) => {
  const { children, justify, className, wrap, gap = 'sm', p = 0, ...restProps } = props;
  return (
    <Box
      className={clsx(classes.root, className, {
        [classes[`justify-${justify}`]]: !!justify,
        [classes[`stack-${wrap}`]]: !!wrap,
        [classes[`gap-${gap}`]]: !!gap,
      })}
      style={{ ...(typeof p === 'number' ? { padding: `${p}px` } : {}) }}
      {...restProps}
    >
      {children}
    </Box>
  );
};
