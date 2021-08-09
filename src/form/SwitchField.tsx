import React from 'react';
import { useField } from 'react-final-form';
import FormField from './FormField';
import Hint from './Hint';
import Switch from './Switch';
import Label from './Label';

const SwitchField = (props: any) => {
  const { label, name, disabled, textOff, textOn, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      <Label>{label}</Label>
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}

      <span>{input.value ? textOn : textOff}</span>

      <Switch
        disabled={disabled}
        onClick={() => input.onChange(!input.value)}
        checked={input.value}
      />
    </FormField>
  );
};

export default SwitchField;
