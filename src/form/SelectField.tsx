import React from 'react';
import { useField } from 'react-final-form';
import { Select } from "@chakra-ui/react";
import FormField from './FormField';
import Label from './Label';
import Hint from './Hint';

type Props = {
  children: any;
  label: string;
  name: string;
  disabled?: boolean;
  validate?: any
};

const SelectField = (props: Props): React.ReactElement => {
  const { label, name, disabled, children, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      <Label>{label}</Label>
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <Select disabled={disabled} {...input}>
        {children}
      </Select>
    </FormField>
  );
};

export default SelectField;
