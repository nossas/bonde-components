import React from "react";
import { Button, Stack } from "@chakra-ui/react";
import * as widgets from "./widgets";
import ChakraS3UploadField from "./fields/ChakraS3UploadField";
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
  fields: {
    "s3": ChakraS3UploadField
  },
  ErrorList,
  FieldTemplate,
  ObjectFieldTemplate
}

export default ChakraTheme;