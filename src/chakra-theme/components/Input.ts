type Props = {
  colorScheme: "pink" | any
}

export default {
  variants: {
    flushed: ({ colorScheme }: Props): any => ({
      field: {
        py: 1,
        borderBottomWidth: "1px",
        borderBottomColor: "gray.100",
        _placeholder: {
          color: "gray.300",
        },
        _hover: {
          borderColor: `${colorScheme}.100`
        },
        _focus: {
          outline: "none",
          borderColor: `${colorScheme}.100`,
          boxShadow: "none"
        },
        _disabled: {
          borderColor: "gray.50",
          bg: "transparent",
          color: "gray.50",
          _placeholder: {
            color: "gray.50"
          }
        },
        _invalid: {
          borderColor: "red"
        }
      }
    })
  },
  defaultProps: {
    size: "sm",
    variant: "flushed",
    colorScheme: "pink"
  }
}