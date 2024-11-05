import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Box, BoxProps } from '@/components/Box';
import classes from './textinput.module.css';

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  BoxProps & {
    label?: string;
    id?: string;
    name?: string;
  };
export const TextInput = forwardRef((props: TextInputProps, _ref: Ref<HTMLInputElement>) => {
  const { label, id, name, ...rest } = props;

  return (
    <Box className={classes.root}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={classes.input} name={name} ref={_ref} data-testid={id} id={id} {...rest} />
    </Box>
  );
});
