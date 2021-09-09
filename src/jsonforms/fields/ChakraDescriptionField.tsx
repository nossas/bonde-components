import React from 'react';
import { FieldProps } from '@rjsf/core';
import { Text } from "@chakra-ui/react";

const DescriptionField = ({ description }: FieldProps) => {
  if (description) {
    return (
      <Text mb={4}>
        {description}
      </Text>
    );
  }

  return null;
};

export default DescriptionField;
