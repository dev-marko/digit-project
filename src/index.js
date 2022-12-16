import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "@fontsource/raleway/";

import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import App from "./App.js";
import Fonts from "./utils/fonts.js";
import theme from "./utils/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ShoppingCartProvider>
          <Fonts />
          <App />
        </ShoppingCartProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
