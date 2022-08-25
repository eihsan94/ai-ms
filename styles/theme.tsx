// theme.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Noto Sans, sans-serif",
      },
      html: {
        fontFamily: "Noto Sans, sans-serif",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "inherit",
      },
    },
  },
});

export default theme