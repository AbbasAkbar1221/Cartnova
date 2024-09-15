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
          <Route path="/men" element={<ShopCategory category="Men" />} />
          <Route path="/women" element={<ShopCategory category="Women" />} />
          <Route path="/kids" element={<ShopCategory category="Kids" />} />
          <Route path="/product/:id" elemente={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        </div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
