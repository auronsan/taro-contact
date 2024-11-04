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
  const { children, justify, wrap, gap = 'sm', p = 0, ...restProps } = props;
  return (
    <Box
      className={clsx(classes.root, {
        [classes[`justify-${justify}`]]: !!justify,
        [classes[`stack-${wrap}`]]: !!wrap,
        [classes[`gap-${gap}`]]: !!gap,
      })}
      style={{ padding: p }}
      {...restProps}
    >
      {children}
    </Box>
  );
};