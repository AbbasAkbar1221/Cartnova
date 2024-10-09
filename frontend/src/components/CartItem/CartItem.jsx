


// import React, { useContext } from "react";
// import cross from "../Assets/cart/cross.png";
// import { ShopContext } from "../../context/ShopContext";

// const CartItem = () => {
//   const { all_products, cart, removeProductFromCart } = useContext(ShopContext);
//   const cartItems = Object.keys(cart).filter(productId => cart[productId] > 0); // Filter out products with quantity zero

//   const totalCost = Object.entries(cart).reduce(
//     (total, [productId, quantity]) => {
//       const product = all_products.find(
//         (product) => product.id === parseInt(productId, 10)
//       );
//       return total + (product ? product.new_price * quantity : 0);
//     },
//     0
//   );

//   return (
//     <div className="mt-7 mb-10 px-4">
//       {/* Table Header */}
//       <div className="grid grid-cols-6 text-xl font-semibold border-b pb-6">
//         <p>Products</p>
//         <p className="w-3/4">Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p className="">Remove</p>
//       </div>

//       {/* Cart Items */}
//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cartItems.map((productId) => {
//           const product = all_products.find(
//             (product) => product.id === parseInt(productId, 10)
//           );

//           if (!product) {
//             return (
//               <p key={productId} className="text-red-500">
//                 Product not found
//               </p>
//             );
//           }

//           return (
//             <div
//               key={productId}
//               className="grid grid-cols-6 items-center my-4 p-2 border-b text-gray-700"
//             >
//               <img
//                 src={product.image}
//                 alt="Product"
//                 className="h-20 w-20 rounded-lg"
//               />
//               <p className="w-3/4 text-lg">{product.name}</p>
//               <p className="text-lg">₹{product.new_price}</p>
//               <p className="text-lg">{cart[productId]}</p>
//               <p className="text-lg">₹{product.new_price * cart[productId]}</p>
//               <div className="">
//                 <img
//                   src={cross}
//                   alt="Remove item"
//                   className="h-7 w-7 cursor-pointer hover:opacity-75"
//                   onClick={() => removeProductFromCart(productId)}
//                 />
//               </div>
//             </div>
//           );
//         })
//       )}

//       {/* Total Cost Section */}
//       <div className="mt-4 border-t pt-4 flex flex-col items-center">
//         <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
//           <span>SubTotal:</span>
//           <span className="text-gray-600">₹{totalCost.toFixed(2)}</span>
//         </div>
//         <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
//           <span>Shipping:</span>
//           <span className="text-gray-600">₹10</span>
//         </div>
//         <div className="flex justify-between text-lg font-semibold w-full max-w-lg">
//           <span>Total:</span>
//           <span className="text-gray-600">₹{(totalCost + 10).toFixed(2)}</span>
//         </div>
//         <div className="my-4 flex justify-center w-full max-w-lg">
//           <input
//             type="text"
//             placeholder="Promo Code"
//             className="border rounded-lg px-4 py-2 w-1/2"
//           />
//           <button className="w-1/2 bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 ml-2">
//             Apply
//           </button>
//         </div>
//         <div className="w-full max-w-lg">
//           <button className="bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 w-1/2">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItem;


import React, { useContext, useMemo } from "react";
import cross from "../Assets/cart/cross.png";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const { all_products, cart, removeProductFromCart } = useContext(ShopContext);
  const cartItems = Object.keys(cart).filter(productId => cart[productId] > 0);

  const totalCost = useMemo(() => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = all_products.find(
        (product) => product.id === parseInt(productId, 10)
      );
      return total + (product ? product.new_price * quantity : 0);
    }, 0);
  }, [cart, all_products]);

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
            return null; // Avoid rendering anything if the product is not found
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
              <p className="col-span-2 sm:col-span-1 text-sm sm:text-lg">{product.name}</p>
              <p className="hidden sm:block text-lg">₹{product.new_price}</p>
              <p className="hidden sm:block text-lg">{cart[productId]}</p>
              <p className="hidden sm:block text-lg">₹{product.new_price * cart[productId]}</p>
              <div className="col-span-1 sm:col-span-1 flex justify-center">
                <img
                  src={cross}
                  alt="Remove item"
                  className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer hover:opacity-75"
                  onClick={() => removeProductFromCart(productId)}
                  aria-label={`Remove ${product.name} from cart`}
                />
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
          <span className="text-gray-600">₹{(totalCost + 10).toFixed(2)}</span>
        </div>
        <div className="my-4 flex flex-col sm:flex-row justify-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Promo Code"
            className="border rounded-lg px-4 py-2 w-full sm:w-1/2 mb-2 sm:mb-0"
            aria-label="Enter promo code"
          />
          <button className="w-full sm:w-1/2 bg-blue-900 text-white rounded-lg px-4 py-2 hover:bg-blue-800 sm:ml-2">
            Apply
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
