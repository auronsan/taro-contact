import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Box, BoxProps } from '@/components/Box';
import classes from './textinput.module.css';

/**
 * Props for the TextInput component.
 */
export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  BoxProps & {
    /**
     * The label for the TextInput component.
     */
    label?: string;

    /**
     * The id for the TextInput component.
     */
    id?: string;

    /**
     * The name for the TextInput component.
     */
    name?: string;
  };

/**
 * TextInput component.
 * @param props - The props for the component.
 * @param _ref - The ref for the input element.
 * @returns The rendered TextInput component.
 */
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
