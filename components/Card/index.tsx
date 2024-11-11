import React from 'react';
import { Box } from '@/components/Box';
import classes from './card.module.css';

/**
 * Props for the Card component.
 */
type TCardProps = {
  /** The content to be rendered inside the card. */
  children: React.ReactNode;
};

/**
 * Card component.
 * @param props - The props for the component.
 * @returns The rendered card.
 */
export const Card = ({ children }: TCardProps): React.ReactElement => (
  <Box className={classes.card}>
    <Box>{children}</Box>
  </Box>
);
