import clsx from 'clsx';
import type { BoxProps } from '@/components/Box';
import { Box } from '@/components/Box';
import classes from './container.module.css';

export interface ContainerProps extends BoxProps {
  /** Sets `max-width` of the container, value is not responsive – it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set. `'md'` by default */
  size?: (string & {}) | number;

  /** Determines whether the container should take 100% of its parent width. If set, `size` prop is ignored. `false` by default. */
  fluid?: boolean;
}

export const Container = (props: ContainerProps) => {
  const { fluid, ...rest } = props;
  return (
    <Box
      {...rest}
      className={clsx({
        [classes.root]: true,
        [classes.fluid]: !!fluid,
      })}
    />
  );
};
