import React from "react";
import { Box, Grid } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ChakraObjectFieldTemplate = (props: any): React.ReactElement => {
  const {
    TitleField,
    DescriptionField,
    uiSchema,
    title,
    description,
    idSchema,
    required
  } = props;
  const { onlyProperties, grid } = uiSchema["ui:options"] || {};

  const children = props.properties.map((element: any) => element.content)

  return onlyProperties && !grid ? children : onlyProperties && grid ? (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      {children}
    </Grid>
  ) : (
    <Box>
    {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      {grid ? (
        <Grid templateColumns="repeat(12, 1fr)" gap={4}>
          {children}
        </Grid>
      ) : children}
    </Box>
  );
}

export default ChakraObjectFieldTemplate;