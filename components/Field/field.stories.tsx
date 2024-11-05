import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput } from '@/components/TextInput';
import { Field } from './index';

export default {
  title: 'components/Field',
  component: Field,
};

export const withTextInput = () => {
  const form = useForm({
    initialValues: {
      test: '',
    },
  });

  return (
    <Field form={form} fieldName="test">
      {({ value, onChange }) => (
        <TextInput
          data-testid="field"
          value={`${value || ''}`}
          onChange={(e) => {
            const val = e.target.value;
            if (typeof onChange === 'function') {
              onChange(val);
            }
          }}
        />
      )}
    </Field>
  );
};
