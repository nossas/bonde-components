import React from "react";
import {
  Input,
  InputProps
} from "@chakra-ui/react";

import { WidgetProps } from "@rjsf/core";

export type ChakraTextWidgetProps = WidgetProps & Pick<InputProps, Exclude<keyof InputProps, 'onBlur' | 'onFocus'>> & {
  type?: string
};

const ChakraTextWidget = ({
  id,
  readonly,
  placeholder,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  uiSchema,
  formContext,
  rawErrors,
  ...inputProps
}: ChakraTextWidgetProps): React.ReactElement => {
  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const inputType = (options.inputType || schema.type) === 'string' ?  'text' : `${options.inputType || schema.type}`

  return (
    <Input
      placeholder={placeholder}
      autoFocus={autofocus}
      disabled={disabled || readonly}
      type={inputType as string}
      value={value || value === 0 ? value : ""}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...(inputProps as InputProps)}
    />
  );
};

export default ChakraTextWidget;