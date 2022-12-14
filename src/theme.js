import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Brice', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    background: {
      100: "#FCF5E1",
      200: "#FFFCF2",
    },
  },
});

export default theme;
