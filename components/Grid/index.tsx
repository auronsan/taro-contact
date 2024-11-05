import React from 'react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import classes from './grid.module.css';

export type GridProps = {
  children?: React.ReactNode;
  columns?: number;
  id?: string;
};

const Grid = (props: GridProps) => {
  const { children, columns = 2, id } = props;

  return (
    <Box
      className={clsx(classes['grid-container'], {
        [classes[`grid-container-columns-${columns}`]]: !!columns,
      })}
      id={id}
      data-testid={id}
    >
      {children}
    </Box>
  );
};

export type GridColProps = {
  children?: React.ReactNode;
  id?: string;
};

const GridCol = (props: GridColProps) => {
  const { children, id } = props;
  return (
    <Box className={classes['grid-col']} id={id}>
      {children}
    </Box>
  );
};

Grid.Col = GridCol;

export default Grid;
