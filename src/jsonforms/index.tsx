import React from "react";
import _ from "lodash";
import { withTheme } from "@rjsf/core";
import ChakraTheme from "./ChakraTheme";

const Form = withTheme(ChakraTheme)

export type JSONSchemaFormError = {
  name: string;
  message: string;
  params: Record<any, any>;
  property: string;
  stack: string;
  schemaPath: string;
}

const transformErrors = (errors: JSONSchemaFormError[]): JSONSchemaFormError[] => {
  return errors.map((error: JSONSchemaFormError) => {
    if (error.name === "required") {
      error.message = "Preenchimento obrigatório"
    }
    return error;
  });
}

export type JSONSchemaFormProps = {
  onSubmit: any;
  schema: any;
  uiSchema: any;
  formData?: any;
  transformErrors?: (errors: JSONSchemaFormError[]) => JSONSchemaFormError[];
}

// eslint-disable-next-line react/prop-types
const JSONSchemaForm: React.FC<JSONSchemaFormProps> = ({
  onSubmit,
  schema,
  uiSchema,
  formData,
  transformErrors: xtransformErrors
}): React.ReactElement => (
  <Form
    noHtml5Validate
    formData={formData}
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
    transformErrors={(errors: any[]) => {
      return xtransformErrors
        ? _.uniqBy(transformErrors(errors).concat(xtransformErrors(errors)), "stack")
        : transformErrors(errors)
      ;
    }}
  />
);

export default JSONSchemaForm;