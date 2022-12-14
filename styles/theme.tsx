// theme.js
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Noto Sans, sans-serif",
        color: "black",
      },
      html: {
        fontFamily: "Noto Sans, sans-serif",
        color: "black",
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
  // colors: {
  //   brand: {
  //     black: "#000000",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
});

export default theme