import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/Pages/Shop';
import Cart from './components/Pages/Cart';
import Contact from './components/Pages/Contact';
import ShopCategory from './components/Pages/ShopCategory';
import LoginSignup from './components/Pages/LoginSignup';
import Product from './components/Pages/Product';

function App() {
  return (
    <div className='App'>
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/men' element={<ShopCategory category='Men'/>} />
        <Route path='/women' element={<ShopCategory category='Women'/>} />
        <Route path='/kids' element={<ShopCategory category='Kids'/>} />
        <Route path='/product/:id' elemente={<Product/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
    </Router>
    <div className="content">
    <h1 className='font-bold text-4xl'>Welcome to Cartnova</h1>
    </div>
    </div>
  );
}

export default App;
