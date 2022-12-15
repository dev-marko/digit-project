import { Routes, Route } from "react-router-dom";
import { VStack, Container } from "@chakra-ui/layout";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import OrderPage from "./pages/OrderPage.jsx"
import AppPage from "./pages/AppPage.jsx"
import MenuPage from "./pages/MenuPage.jsx"
import Footer from "./components/Footer.jsx";


const App = () => {
  return (
    <>
    <VStack bg='background.100'>
        <Container maxW='container.xl'>
          <Navbar />
        </Container>
    </VStack>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="app" element={<AppPage />} />
      <Route path="menu" element={<MenuPage />} />
    </Routes>
 
    <VStack bg='background.100'>
        <Container maxW='container.xl'>
          <Footer />
        </Container>
    </VStack>
    </>
  );
};

export default App;
