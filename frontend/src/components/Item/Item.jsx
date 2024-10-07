import React from "react";
import { Link } from "react-router-dom";


const Item = ({ ItemObj }) => {
  const handleClick=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className="border-2 border-gray-400 rounded-lg p-4 flex flex-col items-center w-full transition-transform transform hover:scale-105 animate-fadeIn">
      <Link to={`/product/${ItemObj.id}`} onClick={handleClick}>
        <img
          src={ItemObj.image}
          alt={ItemObj.name}
          className="w-full h-96 object-cover mb-4 rounded-lg transition-transform transform hover:scale-110"
        />
        <h1 className="text-xl font-semibold mb-2">{ItemObj.name}</h1>
        <div className="cost flex flex-col items-center">
          <div className="newCost text-lg font-bold text-red-600 mb-1">
            ₹{ItemObj.new_price}
          </div>
          <div className="oldCost text-sm text-gray-500 line-through">
            ₹{ItemObj.old_price}
          </div>
        </div>
        </Link>
    </div>
  );
};

export default Item;
