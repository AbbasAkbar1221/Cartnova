import React from "react";
import { createContext} from "react";
import { useState, useEffect } from "react";


const getDefaultCart = () => {
  let cart = {};
  for(let index = 0; index < 300+1; index++){
    cart[index] = 0;
  }
  return cart;
};

let ShopContext = createContext(null);
const ShopContextProvider = ({ children }) => {
    let [all_products, setAllProducts] = useState([]);
    let [cart , setCart] = useState(getDefaultCart());

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
      fetch(`${API_URL}/product/allproducts`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched products:", data); // Check the fetched data in the browser console
          setAllProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });

        if(localStorage.getItem("auth-token")){
          fetch(`${API_URL}/cart/getcart`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Fetched cart:", data); // Check the fetched data in the browser console
              setCart(data);
            })
            .catch((error) => {
              console.error("Error fetching cart:", error);
            });
        }
    }, []);
    
    



  const addProductToCart = async (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  
    if (localStorage.getItem("auth-token")) {
      try {
        const response = await fetch(`${API_URL}/cart/addtocart`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "auth-token": `${localStorage.getItem("auth-token")}`,
          },
          body: JSON.stringify({ productId }),
        });
  
        if (!response.ok) {
          // Handle response errors (e.g., 4xx, 5xx)
          throw new Error("Failed to add product to cart");
        }
  
        const data = await response.json();
        console.log("Added to cart:", data); // Check the fetched data in the browser console
      } catch (error) {
        console.error("Error adding to cart:", error);
        // Optional: Revert the cart state if the request fails
        setCart((prevCart) => ({
          ...prevCart,
          [productId]: (prevCart[productId] || 0) - 1, // Decrement or remove if quantity goes to zero
        }));
      }
    }
  };
  
 
    const removeProductFromCart = async (productId) => {
      setCart((prevCart) => {
        if (!prevCart[productId]) return prevCart;
    
        // If the product quantity is 1, remove it from the cart
        if (prevCart[productId] === 1) {
          const { [productId]: _, ...newCart } = prevCart;
          return newCart;
        }
        /*
        [productId]: _ destructures the prevCart object to get the value of the productId property. The underscore (_) is a convention to indicate that this value is not used further in the code.
        ...newCart gathers all remaining properties of prevCart (excluding productId) into a new object called newCart.
        */
    
        // If the product is in the cart more than once, decrement the quantity
        return {
          ...prevCart,
          [productId]: prevCart[productId] - 1,
        };
      });
    
      if (localStorage.getItem("auth-token")) {
        try {
          const response = await fetch(`${API_URL}/cart/removefromcart`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({ productId }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to remove product from cart");
          }
    
          const data = await response.json();
          console.log("Removed from cart:", data); // Check the fetched data in the browser console
        } catch (error) {
          console.error("Error removing from cart:", error);
          // Optional: Revert the cart state if the request fails
          setCart((prevCart) => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1, // Revert increment if necessary
          }));
        }
      }
    };
    

    const removeAllQuantitiesFromCart = async (productId) => {
      setCart((prevCart) => {
        // Remove the product from the cart completely
        const { [productId]: _, ...newCart } = prevCart;
        return newCart;
      });
    
      if (localStorage.getItem("auth-token")) {
        try {
          const response = await fetch(`${API_URL}/cart/removeallquantities`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "auth-token": `${localStorage.getItem("auth-token")}`,
            },
            body: JSON.stringify({ productId }),
          });
    
          if (!response.ok) {
            throw new Error("Failed to remove all quantities from cart");
          }
    
          const data = await response.json();
          console.log("All quantities removed from cart:", data); // Check the fetched data in the browser console
        } catch (error) {
          console.error("Error removing all quantities from cart:", error);
          // Optional: Restore the cart state if the request fails
          setCart((prevCart) => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0), // Restore the previous quantity
          }));
        }
      }
    };
    
    
    const contextValue = { all_products, cart, addProductToCart, removeProductFromCart, removeAllQuantitiesFromCart };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
