export default {
  baseStyle: {
    field: {
      minW: "405px",
      py: 1,
      borderBottomWidth: "1px",
      borderBottomColor: "gray.100",
      _placeholder: {
        color: "gray.300",
      },
      _hover: {
        borderColor: "gray.100"
      },
      _focus: {
        outline: "none",
        borderColor: "pink.100"
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
  }
}