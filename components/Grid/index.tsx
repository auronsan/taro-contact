import React from 'react';
import { Box } from '@/components/Box';
import classes from './grid.module.css';

export type GridProps = {
  children?: React.ReactNode;
};

const Grid = (props: GridProps) => {
  const { children } = props;

  return <Box className={classes['grid-container']}>{children}</Box>;
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
