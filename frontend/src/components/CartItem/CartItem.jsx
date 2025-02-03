import React, { useContext, useMemo } from "react";
import cross from "../Assets/cart/cross.png";
import { ShopContext } from "../../context/ShopContext";
const { useReducer, useState } = require("react");

const CartItem = () => {
  const {
    all_products,
    cart,
    removeAllQuantitiesFromCart,
    removeProductFromCart,
    addProductToCart,
  } = useContext(ShopContext);

  const totalCost = useMemo(() => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = all_products.find(
        (product) => product.id === parseInt(productId, 10)
      );
      return total + (product ? product.new_price * quantity : 0);
    }, 0);
  }, [cart, all_products]);

  const reducer = (state, action) => {
    switch (action.type) {
      case "FIRST10":
        return totalCost * 0.1;
      case "FIRST20":
        return totalCost * 0.2;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  const [promoCode, setPromoCode] = useState("");

  const cartItems = Object.keys(cart).filter(
    (productId) => cart[productId] > 0
  );

  const handleClick = () => {
    switch (promoCode) {
      case "FIRST10":
        dispatch({ type: "FIRST10" });
        break;
      case "FIRST20":
        dispatch({ type: "FIRST20" });
        break;
      default:
        alert("Invalid Promo Code");
        break;
    }
    setPromoCode("");
  };
  const finalCost = totalCost + 10 - state;

  const handleIncrement = (productId) => {
    addProductToCart(productId);
  };

  const handleDecrement = (productId) => {
    if (cart[productId] > 1) {
      removeProductFromCart(productId);
    } else if (cart[productId] === 1) {
      removeAllQuantitiesFromCart(productId);
    }
  };

  return (
    <div className="mt-7 mb-10 px-4">
      {/* Table Header */}
      <div className="grid grid-cols-3 sm:grid-cols-6 text-base sm:text-xl font-semibold border-b pb-6">
        <p className="col-span-2 sm:col-span-1">Products</p>
        <p className="hidden sm:block">Title</p>
        <p className="hidden sm:block">Price</p>
        <p className="hidden sm:block">Quantity</p>
        <p className="hidden sm:block">Total</p>
        <p className="col-span-1 sm:col-span-1">Remove</p>
      </div>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((productId) => {
          const product = all_products.find(
            (product) => product.id === parseInt(productId, 10)
          );

          if (!product) {
            return null;
          }

          return (
            <div
              key={productId}
              className="grid grid-cols-3 sm:grid-cols-6 items-center my-4 p-2 border-b text-gray-700 text-sm sm:text-base"
            >
              <img
                src={product.image}
                alt="Product"
                className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg"
              />
              <p className="col-span-2 sm:col-span-1 text-sm sm:text-lg">
                {product.name}
              </p>
              <p className="hidden sm:block text-lg">₹{product.new_price}</p>
              <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100 w-24 sm:w-28 justify-between">
                <button
                  onClick={() => handleDecrement(productId)}
                  className="bg-blue-900 text-white font-bold py-1 px-2 rounded-l hover:bg-blue-800 transition duration-200"
                >
                  -
                </button>
                <span className="mx-2 text-lg font-semibold">
                  {cart[productId]}
                </span>
                <button
                  onClick={() => handleIncrement(productId)}
                  className="bg-blue-900 text-white font-bold py-1 px-2 rounded-r hover:bg-blue-800 transition duration-200"
                >
                  +
                </button>
              </div>
              <p className="hidden sm:block text-lg">
                ₹{product.new_price * cart[productId]}
              </p>
              <div className="col-span-1 sm:col-span-1 flex justify-start">
                <button
                  onClick={() => removeAllQuantitiesFromCart(productId)}
                  className="flex items-center justify-center p-2"
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <img
                    src={cross}
                    alt="Remove item"
                    className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer hover:opacity-75"
                  />
                </button>
              </div>
            </div>
          );
        })
      )}

      {/* Total Cost Section */}
      <div className="mt-4 border-t pt-4 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row justify-between text-lg font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>SubTotal:</span>
          <span className="text-gray-600">₹{totalCost.toFixed(2)}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-lg font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>Shipping:</span>
          <span className="text-gray-600">₹10</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-lg font-semibold w-full max-w-lg px-2 sm:px-0">
          <span>Total:</span>
          <span className="text-gray-600">₹{finalCost.toFixed(2)}</span>
        </div>
        <div className="my-4 flex flex-col sm:flex-row justify-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="border rounded-lg px-4 py-2 w-full sm:w-1/2 mb-2 sm:mb-0"
            aria-label="Enter promo code"
          />
          <button
            onClick={handleClick}
            className="w-full sm:w-1/2 bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 sm:ml-2"
          >
            {promoCode ? "Apply" : "Enter Promo Code"}
          </button>
        </div>
        <div className="w-full max-w-lg">
          <button className="bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 w-full sm:w-1/2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
