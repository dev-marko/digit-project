import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import OrderPage from "./pages/OrderPage.jsx"
import AppPage from "./pages/AppPage.jsx"
import MenuPage from "./pages/MenuPage.jsx"


const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="order" element={<OrderPage />} />
      <Route path="app" element={<AppPage />} />
      <Route path="menu" element={<MenuPage />} />
    </Routes>
    </>
  );
};

export default App;
