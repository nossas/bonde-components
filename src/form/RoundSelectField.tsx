import React from 'react';
import { useField } from 'react-final-form';
import { FormField, Hint, RoundSelect, Label } from '../.';

type Props = {
  label: string;
  name: string;
  placeholder: string;
  disabled: boolean;
  options: Array<{
    value: string;
    label: string;
  }>;
};

const RoundSelectField = ({
  label,
  name,
  placeholder,
  disabled,
  options,
  ...config
}: Props) => {
  const { input, meta } = useField(name, config);
  return (
    <FormField>
      <Label>{label}</Label>
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <RoundSelect
        {...input}
        options={options}
        placeholder={placeholder}
        invalid={(meta.error || meta.submitError) && meta.touched}
        disabled={disabled}
      />
    </FormField>
  );
};

export default RoundSelectField;
