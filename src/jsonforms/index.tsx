import React from "react";
import { withTheme } from "@rjsf/core";
import { Button, Stack } from "@chakra-ui/react";
import * as widgets from "./widgets";
import FieldTemplate from "./ChakraFieldTemplate";
import ErrorList from "./ChakraErrorList";
import ObjectFieldTemplate from "./ChakraObjectFieldTemplate";

const ChakraTheme = {
  children: (
    <Stack direction="row" justifyContent="flex-end">
      <Button type="submit">Salvar</Button>
    </Stack>
  ),
  widgets,
  ErrorList,
  FieldTemplate,
  ObjectFieldTemplate
}

const Form = withTheme(ChakraTheme);

const transformErrors = (errors: any[]) => {
  return errors.map((error: any) => {
    if (error.name === "required") {
      error.message = "Preenchimento obrigatório"
    }
    return error;
  });
}

// eslint-disable-next-line react/prop-types
const JSONSchemaForm: React.FC = ({ onSubmit, schema, uiSchema }: any): React.ReactElement => (
  <Form
    liveValidate
    noHtml5Validate
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={onSubmit}
    transformErrors={transformErrors}
  />
);

export default JSONSchemaForm;