import React from 'react';
import { useField } from 'react-final-form';
import FormField from './FormField';
import Hint from './Hint';
import Input from './Input';
import Label from './Label';

interface InputFieldProps {
  name: string;
  label?: string;
}

const InputField = (props: InputFieldProps) => {
  const { label, name, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      <Label>{label}</Label>
      {meta.error && meta.touched && <Hint color="error">{meta.error}</Hint>}
      <Input {...input} />
    </FormField>
  );
};

export default InputField;
