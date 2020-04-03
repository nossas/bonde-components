import React from 'react';
import { useField } from 'react-final-form';
import FormField from './FormField';
import Hint from './Hint';
import Input from './Input';
import Label from './Label';

const InputField = (props: any) => {
  const { label, name, placeholder, type, disabled, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      <Label>{label}</Label>
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <Input
        placeholder={placeholder}
        type={type}
        invalid={(meta.error || meta.submitError) && meta.touched}
        disabled={disabled}
        {...input}
      />
    </FormField>
  );
};

export default InputField;
