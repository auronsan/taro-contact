import React from 'react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import classes from './grid.module.css';

export type GridProps = {
  children?: React.ReactNode;
  columns?: number;
};

const Grid = (props: GridProps) => {
  const { children, columns = 2 } = props;

  return (
    <Box
      className={clsx(classes['grid-container'], {
        [classes[`grid-container-columns-${columns}`]]: !!columns,
      })}
    >
      {children}
    </Box>
  );
};

export type GridColProps = {
  children?: React.ReactNode;
};

const GridCol = (props: GridColProps) => {
  const { children } = props;
  return <Box className={classes['grid-col']}>{children}</Box>;
};

Grid.Col = GridCol;

export default Grid;
