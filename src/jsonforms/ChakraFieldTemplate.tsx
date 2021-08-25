import React from "react";
import { FieldTemplateProps } from "@rjsf/core";
import {
  FormControl,
  FormLabel,
  List,
  ListItem,
  FormErrorMessage,
  FormHelperText,
  Tooltip,
  Stack
} from "@chakra-ui/react";
import { InfoIcon } from "..";

const ChakraFieldTemplate = ({
  id,
  children,
  displayLabel,
  hidden,
  label,
  required,
  rawErrors = [],
  rawHelp,
  rawDescription
}: FieldTemplateProps): React.ReactElement => {
  if (hidden) {
    return children;
  }

  return (
    <FormControl id={id} isRequired={required} isInvalid={rawErrors.length > 0} mb={4}>
      <Stack direction="row" justifyContent="space-between">
        {displayLabel && label ? (
          <Stack direction="row" spacing={4} alignItems="center">
            <FormLabel>
              {label}
            </FormLabel>
            {rawHelp && (
              <Tooltip label={rawHelp}>
                <InfoIcon boxSize={6} color="gray.200" />
              </Tooltip>
            )}
          </Stack>
        ) : null}
        {rawErrors.length > 0 && (
          <List>
            {rawErrors.map((error, i: number) => {
              return (
                <ListItem key={i}>
                  <FormErrorMessage color="red">{error}</FormErrorMessage>
                </ListItem>
              );
            })}
          </List>
        )}
      </Stack>
      {children}
      {rawDescription && <FormHelperText>{rawDescription}</FormHelperText>}
    </FormControl>
  );
};

export default ChakraFieldTemplate;