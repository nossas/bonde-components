import React from 'react';
import { useField } from 'react-final-form';
import FormField from './FormField';
import Hint from './Hint';
import RoundSelect from './RoundSelect';
import Label from './Label';

type Props = {
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  menuPortalTarget?: HTMLBodyElement | null;
};

const RoundSelectField = ({
  label,
  name,
  placeholder,
  disabled,
  options,
  menuPortalTarget,
  ...config
}: Props) => {
  const { input, meta } = useField(name, config);
  return (
    <FormField>
      {label && <Label>{label}</Label>}
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <RoundSelect
        {...input}
        options={options}
        placeholder={placeholder}
        invalid={(meta.error || meta.submitError) && meta.touched}
        disabled={disabled}
        menuPortalTarget={menuPortalTarget}
      />
    </FormField>
  );
};

export default RoundSelectField;
