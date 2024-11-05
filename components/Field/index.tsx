import React from 'react';
import { UseFormReturnType } from '@mantine/form';

export type FormInputProps = {
  prefix?: string;
  fieldName: string;
  form: UseFormReturnType<any>;
  children: (props: { value: any; onChange: any }) => React.ReactElement;
};
export const Field = ({
  fieldName,
  form,
  prefix = '',
  children,
}: FormInputProps): React.ReactElement => {
  const prefixFieldName = prefix ? `${prefix}.${fieldName}` : `${fieldName}`;
  const { value = '', onChange } = form.getInputProps(prefixFieldName);
  return children({ value, onChange });
};
