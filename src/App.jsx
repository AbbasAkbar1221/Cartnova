import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import Cart from "./components/Pages/Cart";
import Contact from "./components/Pages/Contact";
import ShopCategory from "./components/Pages/ShopCategory";
import LoginSignup from "./components/Pages/LoginSignup";
import Product from "./components/Pages/Product";
import Footer from "./components/Footer";
import men_banner from './components/Assets/banner/banner_men.png'
import women_banner from './components/Assets/banner/banner_women.png'
import kids_banner from './components/Assets/banner/banner_kid.png'
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/men" element={<ShopCategory category="Men" banner={men_banner}/>} />
          <Route path="/women" element={<ShopCategory category="Women" banner={women_banner}/>} />
          <Route path="/kid" element={<ShopCategory category="Kid" banner={kids_banner} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
