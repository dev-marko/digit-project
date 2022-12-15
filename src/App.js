import { Routes, Route } from "react-router-dom";
import { VStack, Container, useMediaQuery } from "@chakra-ui/react";

import Navbar from "./components/Navbar.jsx";
import MobileNavigation from "./components/MobileNavigation";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import OrderDrawer from "./components/OrderDrawer.jsx";
import AppPage from "./pages/AppPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import Footer from "./components/Footer.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

const App = () => {
  const [isMediumBreakpoint] = useMediaQuery("(min-width: 48em)");

  return (
    <>
      <VStack bg="background.100">
        {isMediumBreakpoint ? (
          <Container maxW="container.xl">
            <Navbar />
          </Container>
        ) : (
          <MobileNavigation />
        )}
      </VStack>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="app" element={<AppPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Routes>

      <VStack bg="background.100">
        <Container maxW="container.xl"><Footer /></Container>
      </VStack>
    </>
  );
};

export default App;
