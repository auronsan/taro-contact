import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Box, BoxProps } from '@/components/Box';
import classes from './textinput.module.css';

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  BoxProps;
export const TextInput = (props: TextInputProps) => (
  <Box className={classes.root}>
    <Box component="input" className={classes.input} {...props} />
  </Box>
);
