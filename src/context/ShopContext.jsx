import React from "react";
import all_products from "../components/Assets/all_products";
import { createContext } from "react";
import { useState } from "react";

const getDefaultCart = () => {
  let cart = {};
  return cart;
};

let ShopContext = createContext(null);
const ShopContextProvider = ({ children }) => {
    let [cart , setCart] = useState(getDefaultCart());

    const addProductToCart = (productId) => {
      setCart((prevCart) => {
        return {
          ...prevCart,
          [productId]: (prevCart[productId] || 0) + 1
        }
      });
    }

    const removeProductFromCart = (productId) => {
      setCart((prevCart) => {
        // if the product is not in the cart, do nothing
        if(!prevCart[productId]) return prevCart;

        // if the product is in the cart
        if(prevCart[productId] === 1){
          const { [productId]: _, ...newCart } = prevCart;
          return newCart;
        }

        // if the product is in the cart more than once
        return {
          ...prevCart,
          [productId]: prevCart[productId] - 1
        }
      })
    }
    
    const contextValue = { all_products, cart, addProductToCart, removeProductFromCart };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
