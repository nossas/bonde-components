type Props = {
  colorScheme: "pink" | "gray"
}

const disabled = {
  solid: {
    bg: "gray.50",
    color: "white"
  },
  outline: {
    color: "gray.50",
    borderColor: "gray.50",
    bg: "transparent"
  },
  link: {
    color: "gray.50"
  }
}

export default {
  baseStyle: {
    borderRadius: "50px",
    fontWeight: "800",
    textTransform: "uppercase"
  },
  variants: {
    solid: ({ colorScheme }: Props): any => ({
      bg: `${colorScheme}.100`,
      color: "white",
      _hover: {
        bg: `${colorScheme}.200`,
        _disabled: disabled.solid
      },
      _active: {
        bg: `${colorScheme}.300`,
        _disabled: disabled.solid
      },
      _focus: {
        boxShadow: "none",
        _disabled: disabled.solid
      },
      _disabled: disabled.solid
    }),
    outline: ({ colorScheme }: Props): any => ({
      bg: "transparent",
      color: `${colorScheme}.300`,
      borderColor: `${colorScheme}.300`,
      _hover: {
        color: `${colorScheme}.200`,
        borderColor: `${colorScheme}.200`,
        bg: "transparent",
        _disabled: disabled.outline
      },
      _active: {
        color: `${colorScheme}.100`,
        borderColor: `${colorScheme}.100`,
        bg: "transparent",
        _disabled: disabled.outline
      },
      _focus: {
        boxShadow: "none"
      },
      _disabled: disabled.outline
    }),
    link: ({ colorScheme }: Props): any => ({
      bg: "transparent",
      borderColor: "transparent",
      color: `${colorScheme}.300`,
      minW: "auto",
      _hover: {
        color: `${colorScheme}.200`,
        borderColor: "transparent",
        bg: "transparent",
        textDecoration: "none",
        _disabled: disabled.link
      },
      _active: {
        color: `${colorScheme}.100`,
        borderColor: "transparent",
        bg: "transparent",
        textDecoration: "none",
        _disabled: disabled.link
      },
      _focus: {
        boxShadow: "none"
      },
      _disabled: disabled.link
    })
  },
  sizes: {
    sm: {
      h: "42px",
      minW: "192px",
      fontSize: "sm",
      px: 4
    }
  },
  defaultProps: {
    variant: "solid",
    colorScheme: "pink",
    size: "sm"
  }
}