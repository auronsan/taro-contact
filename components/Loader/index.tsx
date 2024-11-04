import clsx from 'clsx';
import { Box } from '@/components/Box';
import type { BoxProps } from '@/components/Box';
import classes from './loader.module.css';

type LoaderProps = {
  className?: string;
} & BoxProps;

export const Loader = (props: LoaderProps) => {
  const { className, ...restProps } = props;

  return (
    <Box
      component="span"
      className={clsx(classes.root, classes.barsLoader, className)}
      {...restProps}
    >
      <span className={classes.bar} />
      <span className={classes.bar} />
      <span className={classes.bar} />
    </Box>
  );
};
