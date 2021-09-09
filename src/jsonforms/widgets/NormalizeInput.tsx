import React from "react";
import { InputProps } from "@chakra-ui/react";
import { WidgetProps } from "@rjsf/core";
import ChakraText from "./ChakraText";

export type NormalizeInputProps = WidgetProps & Pick<InputProps, Exclude<keyof InputProps, 'onBlur' | 'onFocus'>> & {
  type?: string
};

const NormalizeInput: React.FC<NormalizeInputProps> = (props) => {
  // override value and onChange to apply mask
  const { normalize }: any = props.uiSchema["ui:options"] || {};
  const { value, onChange } = props;

  return (
    <ChakraText
      {...props}
      onChange={(newValue: any) => {
        let updated = newValue;
        if (normalize) {
          updated = normalize(newValue, value);
        }
        onChange(updated)
      }}
    />
  )
}

export default NormalizeInput;