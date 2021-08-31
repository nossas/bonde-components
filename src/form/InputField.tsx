import React from 'react';
import styled from "styled-components";
import { useField } from 'react-final-form';
import theme from "../base/theme";
import FormField from './FormField';
import Hint from './Hint';
import Label from './Label';

interface InputProps {
  invalid?: boolean;
}

const Input = styled.input<InputProps>`
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  color: #000;
  border: none;
  border-bottom: 1px solid ${props => props.theme.commons.main};
  padding: 8px 0;
  background: none;

  ${props => props.invalid && `border-color: #ff0931;`}

  &[disabled] {
    color: #d1cdd2;
    background: none;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.brand.main};
  }

  &::placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &::-webkit-input-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &::-moz-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &:-ms-input-placeholder {
    color: ${props => props.theme.commons.dark};
  }
  &:-moz-placeholder {
    color: ${props => props.theme.commons.dark};
  }
`;

Input.defaultProps = {
  theme,
  invalid: false,
  type: 'text',
};

const InputField = (props: any) => {
  const { label, name, placeholder, type, disabled, onBlur, ...config } = props;
  const { input, meta } = useField(name, config);

  return (
    <FormField>
      <Label>{label}</Label>
      {(meta.error || meta.submitError) && meta.touched && (
        <Hint color="error">{meta.error || meta.submitError}</Hint>
      )}
      <Input
        {...input}
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

export default InputField;
