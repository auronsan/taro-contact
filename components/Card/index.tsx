import React from 'react';
import { Box } from '@/components/Box';
import classes from './card.module.css';

type TCardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: TCardProps): React.ReactElement => (
  <Box className={classes.card}>
    <Box>{children}</Box>
  </Box>
);

export default Card;
