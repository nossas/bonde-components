export default {
  variants: {
    dropdown: {
      button: {
        textTransform: "uppercase",
      },
      list: {
        borderRadius: "none",
        boxShadow: "xs"
      },
      item: {
        _focus: {
          bg: "transparent",
        },
        _active: {
          bg: "transparent",
        },
        _expanded: {
          bg: "transparent",
        },
      },
      groupTitle: {
        fontWeight: "normal",
        fontSize: "inherit"
      }
    }
  }
}