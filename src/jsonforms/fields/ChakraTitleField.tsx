import React from 'react';
import { FieldProps } from '@rjsf/core';
import { Text } from "@chakra-ui/react";

const ChakraTitleField = ({ title }: FieldProps) => (
  <Text fontWeight="800" fontSize="md" mb={2}>
    {title}
  </Text>
);

export default ChakraTitleField;