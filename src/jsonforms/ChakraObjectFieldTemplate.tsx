import React from "react";
import { Box, Text, Grid } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ChakraObjectFieldTemplate = (props: any): React.ReactElement => {
  const {
    onlyProperties,
    grid
  } = props.uiSchema["ui:options"] || {};

  const children = props.properties.map((element: any) => element.content)

  return onlyProperties && !grid ? children : onlyProperties && grid ? (
    <Grid templateColumns="repeat(12, 1fr)" gap={4}>
      {children}
    </Grid>
  ) : (
    <Box>
      {props.title && (<Text fontWeight="800" fontSize="md" mb={4}>{props.title}</Text>)}
      {props.description && (
        <Text>
          {props.description}
        </Text>
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