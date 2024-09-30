import React, { useContext } from "react";
import cross from "../Assets/cart/cross.png";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const { all_products, cart, removeProductFromCart } = useContext(ShopContext);
  const cartItems = Object.keys(cart); // Array of product IDs

  const totalCost = Object.entries(cart).reduce(
    (total, [productId, quantity]) => {
      const product = all_products.find(
        (product) => product.id === parseInt(productId, 10)
      );
      return total + (product ? product.new_cost * quantity : 0);
    },
    0
  );

  return (
    <div className="mt-7 mb-10 px-4">
      {/* Table Header */}
      <div className="grid grid-cols-6 text-xl font-semibold border-b pb-6">
        <p>Products</p>
        <p className="w-3/4">Title</p> {/* Increased width for title */}
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p className="">Remove</p> {/* Centered heading */}
      </div>

      {/* Cart Items */}
      {cartItems.map((productId) => {
        const product = all_products.find(
          (product) => product.id === parseInt(productId, 10) // Ensure IDs match
        );

        if (!product) {
          return (
            <p key={productId} className="text-red-500">
              Product not found
            </p>
          );
        }

        return (
          <div
            key={productId}
            className="grid grid-cols-6 items-center my-4 p-2 border-b text-gray-700"
          >
            <img
              src={product.image}
              alt="Product"
              className="h-20 w-20 rounded-lg"
            />
            <p className="w-3/4 text-lg ">{product.name}</p>{" "}
            {/* Adjusted className */}
            <p className="text-lg">₹{product.new_cost}</p>
            <p className="text-lg">{cart[productId]}</p>
            <p className="text-lg">₹{product.new_cost * cart[productId]}</p>
            <div className="">
              <img
                src={cross}
                alt="Remove item"
                className="h-7 w-7 cursor-pointer hover:opacity-75"
                onClick={() => removeProductFromCart(productId)}
              />
            </div>
          </div>
        );
      })}

      {/* Total Cost Section */}
      <div className="mt-4 border-t pt-4 flex flex-col items-center">
        <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
          <span >SubTotal:</span>
          <span className="text-gray-600">₹{totalCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
          <span>Shipping:</span>
          <span className="text-gray-600">₹10</span>
        </div>
        <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
          <span>Total:</span>
          <span className="text-gray-600">₹{(totalCost + 10).toFixed(2)}</span>
        </div>
        <div className="my-4 flex justify-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Promo Code"
            className="border rounded-lg px-4 py-2 w-1/2"
          />
          <button className="w-1/2 bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 ml-2">
            Apply
          </button>
        </div>
        <div className="w-full max-w-lg">
          <button className="bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 w-1/2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
