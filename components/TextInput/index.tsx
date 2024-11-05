import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Box, BoxProps } from '@/components/Box';
import classes from './textinput.module.css';

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  BoxProps & {
    label?: string;
  };
export const TextInput = forwardRef((props: TextInputProps, _ref: Ref<HTMLInputElement>) => {
  const { label, ...rest } = props;

  return (
    <Box className={classes.root}>
      {label && <label className={classes.label}>{label}</label>}
      <input className={classes.input} ref={_ref} {...rest} />
    </Box>
  );
});
