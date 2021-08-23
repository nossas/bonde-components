const baseStyle = ({ colorScheme }: any) => ({
  control: {
    border: "1px solid",
    borderColor: "gray.200",
    _checked: {
      bg: `none`,
      borderColor: `${colorScheme}.100`,
      _before: {
        w: "100%",
        h: "100%",
        bg: `${colorScheme}.100`,
        borderColor: "white",
        border: `1px solid`,
        color: `white`,
      }
    },
    _hover: {
      borderColor: `${colorScheme}.100`,
    },
    _focus: {
      boxShadow: "none"
    }
  }
})


export default {
  baseStyle: baseStyle,
  defaultProps: {
    colorScheme: "pink"
  }
}