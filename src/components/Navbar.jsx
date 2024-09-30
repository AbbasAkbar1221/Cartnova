import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";


const Navbar = () => {
  let [menu, setMenu] = useState("shop");
  let {cart} = useContext(ShopContext);

  let totalItems = Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  
  return (
    <nav>
      <div className="flex items-center justify-between h-20 px-5 bg-gray-900">
        {/* Left Section */}
        <div className="flex">
          <img src="./bag.png" alt="logo" className="h-10" />
          <h1 className="pl-4 text-4xl font-semibold text-white">Cartnova</h1>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-white">
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => {setMenu("shop")}}
            >
              <Link to='/'>Shop All</Link> {menu === "shop" ? <hr /> : <></>} 
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("men")}
            >
              <Link to='/men'>Shop Men</Link> {menu === "men" ? <hr /> : <></>}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("women")}
            >
              <Link to='/women'>Shop Women</Link> {menu === "women" ? <hr /> : <></>}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("kids")}
            >
              <Link to='/kid'>Shop Kids</Link> {menu === "kids" ? <hr /> : <></>}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("contact")}
            >
              <Link to='/contact'>Contact</Link> {menu === "contact" ? <hr /> : <></>}
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            <Link to='/login'>Signup</Link>
          </button>
          <div className="flex items-center">
            <Link to='/cart'><img src="./shopping-cart.png" alt="cart" className="h-8" /></Link>
          </div>
          <div className="bg-blue-600 text-white w-6 h-9 text-center rounded-xl text-lg pt-1">{totalItems}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
