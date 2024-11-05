import React from 'react';
import { useForm } from '@mantine/form';
import { FormInput } from './index';

export default {
  title: 'components/FormInput',
  component: FormInput,
};

export const withForm = () => {
  const form = useForm({
    initialValues: {
      test: '',
    },
  });

  return <FormInput form={form} fieldName="test" id="form-input" />;
};

export const withLabel = () => {
  const form = useForm({
    initialValues: {
      test: '',
    },
  });

  return <FormInput form={form} fieldName="test" label="Test Label" id="form-input" />;
};
