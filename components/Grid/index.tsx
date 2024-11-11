import React from 'react';
import clsx from 'clsx';
import { Box } from '@/components/Box';
import classes from './grid.module.css';

/**
 * Props for the Grid component.
 */
export type GridProps = {
  /** The content to be rendered inside the grid. */
  children?: React.ReactNode;

  /** The number of columns in the grid. Defaults to 2. */
  columns?: number;

  /** The ID of the grid. */
  id?: string;
};

/**
 * Grid component.
 * @param props - The props for the component.
 * @returns The rendered grid.
 */
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

/**
 * Props for the GridCol component.
 */
export type GridColProps = {
  /** The content to be rendered inside the grid column. */
  children?: React.ReactNode;

  /** The ID of the grid column. */
  id?: string;
};

/**
 * GridCol component.
 * @param props - The props for the component.
 * @returns The rendered grid column.
 */
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
