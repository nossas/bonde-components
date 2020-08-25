import React from 'react';
import { useField } from 'react-final-form';
import FormField from './FormField';
import Hint from './Hint';
import InputWithIcon from './InputWithIcon';
import Label from './Label';

type Props = {
  name: string;
  icon: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  onBlur?: (e: any) => void;
};

const InputWithIconField = ({
  name,
  type,
  label,
  placeholder,
  disabled,
  onBlur,
  icon,
  ...config
}: Props) => {
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      {label && <Label>{label}</Label>}
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <InputWithIcon
        {...input}
        icon={icon}
        placeholder={placeholder}
        type={type}
        invalid={(meta.error || meta.submitError) && meta.touched}
        disabled={disabled}
        onBlur={e => {
          onBlur && onBlur(e);
          input.onBlur(e);
        }}
      />
    </FormField>
  );
};

export default InputWithIconField;
