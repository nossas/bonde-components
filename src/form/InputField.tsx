import React from 'react';
import { useField } from 'react-final-form';
import { Input, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import Hint from './Hint';

const InputField = (props: any) => {
  const { label, name, placeholder, type, disabled, onBlur, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormControl isInvalid={(meta.error || meta.submitError) && meta.touched}>
      <Flex direction="row" justify="space-between">
        <FormLabel>{label}</FormLabel>
        {(meta.error || meta.submitError) && meta.touched && (
          <Hint color="error">{meta.error || meta.submitError}</Hint>
        )}
      </Flex>
      <Input
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        type={type || input.type}
        disabled={disabled}
        onBlur={e => {
          onBlur && onBlur(e);
          input.onBlur(e);
        }}
      />
    </FormControl>
  );
};

export default InputField;
