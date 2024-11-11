import clsx from 'clsx';
import { Box } from '@/components/Box';
import type { BoxProps } from '@/components/Box';
import classes from './stack.module.css';

/**
 * Props for the Stack component.
 */
type StackProps = {
  /**
   * The horizontal alignment of the children.
   */
  justify?: 'center' | 'space-between' | 'end';

  /**
   * Whether the children should wrap or not.
   */
  wrap?: 'wrap' | 'nowrap';

  /**
   * The gap between the children.
   */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The padding of the component.
   */
  p?: number;
} & BoxProps;

/**
 * Stack component.
 * @param props - The props for the component.
 * @returns The rendered stack component.
 */
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
