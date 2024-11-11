import React from 'react';
import { UseFormReturnType } from '@mantine/form';
import { Field } from '@/components/Field';
import { TextInput } from '@/components/TextInput';

/**
 * Props for the TextInput component.
 * Omit the `value`, `onChange`, and `form` props from the `TextInput` component.
 */
type TextInputProps = Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange' | 'form'>;

/**
 * Props for the FormInput component.
 */
export type FormInputProps = {
  /**
   * A prefix to be added to the field name.
   * If provided, the field name will be `${prefix}.${fieldName}`.
   */
  prefix?: string;

  /**
   * The name of the field.
   */
  fieldName: string;

  /**
   * The form instance.
   */
  form: UseFormReturnType<any>;

  /**
   * A function to be called when the value of the input changes.
   * If provided, it will be called with the new value.
   */
  onChange?: (val: any) => void;
} & TextInputProps;

/**
 * FormInput component.
 * @param props - The props for the component.
 * @returns The rendered form input.
 */
export const FormInput = ({
  fieldName,
  form,
  prefix = '',
  onChange,
  ...rest
}: FormInputProps): React.ReactElement => (
  <Field form={form} fieldName={fieldName} prefix={prefix}>
    {({ value, onChange: onChangeLocal }) => (
      <TextInput
        name={fieldName}
        value={`${value || ''}`}
        onChange={(e) => {
          const val = e.target.value;
          onChangeLocal(val);
          if (typeof onChange === 'function') {
            onChange(val);
          }
        }}
        {...rest}
      />
    )}
  </Field>
);
