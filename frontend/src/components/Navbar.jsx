import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { cart } = useContext(ShopContext);

  const totalItems = Object.values(cart).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <nav className="bg-gray-900">
      <div className="flex items-center justify-between h-20 px-5 lg:px-10">
        {/* Left Section */}
        <div className="flex items-center">
          <img src="./bag.png" alt="logo" className="h-8 sm:h-10" />
          <h1 className="pl-4 text-2xl sm:text-4xl font-semibold text-white">
            Cartnova
          </h1>
        </div>

        {/* Center Section */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6 lg:space-x-10 text-white">
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("shop")}
            >
              <Link to="/">Shop All</Link> {menu === "shop" && <hr />}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("men")}
            >
              <Link to="/men">Shop Men</Link> {menu === "men" && <hr />}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("women")}
            >
              <Link to="/women">Shop Women</Link> {menu === "women" && <hr />}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("kids")}
            >
              <Link to="/kid">Shop Kids</Link> {menu === "kids" && <hr />}
            </li>
            <li
              className="hover:text-gray-300 cursor-pointer"
              onClick={() => setMenu("contact")}
            >
              <Link to="/contact">Contact</Link> {menu === "contact" && <hr />}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center text-white">
          <button
            onClick={() => setMenu(menu === "open" ? "" : "open")}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {localStorage.getItem("auth-token") ? (
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Login
              </button>
            </Link>
          )}
          <div className="flex items-center">
            <Link to="/cart">
              <img
                src="./shopping-cart.png"
                alt="cart"
                className="h-6 sm:h-8"
              />
            </Link>
          </div>
          <div className="bg-blue-600 text-white w-6 h-6 sm:w-8 sm:h-8 text-center rounded-full text-xs sm:text-lg pt-1">
            {totalItems}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu === "open" && (
        <div className="lg:hidden flex flex-col items-center space-y-3 bg-gray-800 text-white py-3">
          <Link to="/" onClick={() => setMenu("shop")}>
            Shop All
          </Link>
          <Link to="/men" onClick={() => setMenu("men")}>
            Shop Men
          </Link>
          <Link to="/women" onClick={() => setMenu("women")}>
            Shop Women
          </Link>
          <Link to="/kid" onClick={() => setMenu("kids")}>
            Shop Kids
          </Link>
          <Link to="/contact" onClick={() => setMenu("contact")}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
