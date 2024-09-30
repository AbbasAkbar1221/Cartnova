import React from "react";
import all_products from "../components/Assets/all_products";
import { createContext, memo} from "react";
import { useState } from "react";

const getDefaultCart = () => {
  let cart = {};
  return cart;
};

let ShopContext = createContext(null);
const ShopContextProvider = ({ children }) => {
    let [cart , setCart] = useState(getDefaultCart());

    const addProductToCart = (productId) => {
      console.log("Adding product to cart:", productId);
      setCart((prevCart) => {
          // Create a new cart object by copying the previous cart
          // If the product is already in the cart, increment its quantity by 1
          // If the product is not in the cart, add it with a quantity of 1
          return {
              ...prevCart, // Spread the previous cart to copy all existing items
              [productId]: (prevCart[productId] || 0) + 1 // Increment the quantity of the product by 1, or set it to 1 if it doesn't exist
          };
      });
  };

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
// Memoize the ShopContextProvider to prevent unnecessary re-renders
export const MemoizedShopContextProvider = memo(ShopContextProvider);

export { ShopContext, ShopContextProvider };
