import React, { useEffect } from "react";
import fullstar from "../Assets/stars/star.png";
import outlineStar from "../Assets/stars/star (1).png";
import { ShopContext } from "../../context/ShopContext";
import { useContext, useState } from "react";

const ProductDisplay = ({ product }) => {
  const { addProductToCart, removeProductFromCart, cart } =
    useContext(ShopContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const productQuantity = cart[product.id] || 0;
    setQuantity(productQuantity);
  }, [cart, product.id]);

  const handleCart = () => {
    if (quantity === 0) {
      setQuantity(1);
      addProductToCart(product.id);
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    addProductToCart(product.id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      removeProductFromCart(product.id);
    } else if (quantity === 1) {
      setQuantity(0);
      removeProductFromCart(product.id);
    }
  };

  if (!product) {
    return <div>Loading...</div>; // or a suitable loading message/UI
  }

  return (
    <div className="flex flex-col md:flex-row">
      {/* Thumbnails */}
      <div className="mx-6 mb-4 md:mb-0">
        <img
          src={product.image}
          alt="not found"
          className="h-20 w-18 rounded-lg mb-2"
        />
        <img
          src={product.image}
          alt="not found"
          className="h-20 w-18 rounded-lg mb-2"
        />
        <img
          src={product.image}
          alt="not found"
          className="h-20 w-18 rounded-lg mb-2"
        />
        <img
          src={product.image}
          alt="not found"
          className="h-20 w-18 rounded-lg mb-2"
        />
      </div>
      {/* Main image */}
      <div className="md:mb-0">
        <img src={product.image} alt="not found" className="mx-8 rounded-xl" />
      </div>
      {/* Product details */}
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex h-6 my-6">
          <img src={fullstar} alt="not found" className="mr-2" />
          <img src={fullstar} alt="not found" className="mr-2" />
          <img src={fullstar} alt="not found" className="mr-2" />
          <img src={fullstar} alt="not found" className="mr-2" />
          <img src={outlineStar} alt="not found" />
        </div>
        <div className="flex">
          <h1 className="line-through text-xl text-gray-400">
            {" "}
            ₹{product.old_price}
          </h1>
          <h1 className="text-2xl text-blue-900 ml-3 font-semibold">
            {" "}
            ₹{product.new_price}
          </h1>
        </div>
        <div>
          <p className="my-6 text-gray-600 text-lg">{product.description}</p>
        </div>
        <div>
          <h1 className="text-3xl font-semibold my-6">Select Size</h1>
        </div>
        <div className="flex">
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2">
            S
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2">
            M
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2">
            L
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2">
            XL
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-xl mr-2">
            XXL
          </button>
        </div>
        <div className="mt-3 mb-5">
          {quantity === 0 ? (
            <button
              onClick={handleCart}
              className="text-white bg-blue-900 hover:bg-blue-950 p-4 rounded-lg my-6 w-56"
            >
              Add to cart
            </button>
          ) : (
            <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-gray-100 w-24 sm:w-28 justify-between">
            <button
              onClick={handleDecrement}
              className="bg-blue-900 text-white font-bold py-1 px-2 rounded-l hover:bg-blue-800 transition duration-200"
            >
              -
            </button>
            <span className="mx-2 text-lg font-semibold">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="bg-blue-900 text-white font-bold py-1 px-2 rounded-r hover:bg-blue-800 transition duration-200"
            >
              +
            </button>
          </div>
          

          )}
        </div>
        <div className="flex mb-6">
          <h1 className="text-xl font-semibold mr-1.5">Category :</h1>
          <h1 className="text-xl text-gray-400">{product.category}</h1>
        </div>
        <div className="flex mb-6">
          <h1 className="text-xl font-semibold mr-1.5">Brand :</h1>
          <h1 className="text-xl text-gray-400">Not Available</h1>
        </div>
        <div className="flex mb-6">
          <h1 className="text-xl font-semibold mr-1.5">Product Code :</h1>
          <h1 className="text-xl text-gray-400">{product.id}</h1>
        </div>
        <div className="flex mb-6">
          <h1 className="text-xl font-semibold mr-1.5">Availability :</h1>
          <h1 className="text-xl text-gray-400">Out of Stock</h1>
        </div>
        <div className="flex mb-16">
          <h1 className="text-xl font-semibold mr-1.5">Tags :</h1>
          <h1 className="text-xl text-gray-400">Not Available</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
