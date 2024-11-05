import React from 'react';
import { UseFormReturnType } from '@mantine/form';
import { Field } from '@/components/Field';
import { TextInput } from '@/components/TextInput';

type TextInputProps = Omit<React.ComponentProps<typeof TextInput>, 'value' | 'onChange' | 'form'>;
export type FormInputProps = {
  prefix?: string;
  fieldName: string;
  form: UseFormReturnType<any>;
  onChange?: (val: any) => void;
} & TextInputProps;
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
