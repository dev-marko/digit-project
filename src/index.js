import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/raleway/";

import App from "./App.js";
import Fonts from "./utils/fonts.js";
import theme from "./theme.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
