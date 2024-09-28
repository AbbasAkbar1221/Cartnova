import React from "react";
import all_products from "../components/Assets/all_products";
import { createContext } from "react";

let ShopContext = createContext(null);
const ShopContextProvider = ({ children }) => {
    const products = {all_products};
  return (
    <ShopContext.Provider value={products}>{children}</ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
