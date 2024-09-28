import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Item from "../Item/Item";
import dropdown from "../Assets/dropdown.png";

const ShopCategory = ({ banner, category }) => {
  const {all_products} = useContext(ShopContext);
  const category_products = all_products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <img src={banner} alt={category} />
      <div className="my-12 flex justify-between">
        <h1 className="text-2xl ml-10 ">showing 1-12 out of 36 products</h1>

        <div className="mr-10 text-lg border border-gray-300  hover:bg-gray-100 focus:ring-4 focus:ring-gray-900 font-medium rounded-full px-5 py-2.5 me-2 mb-2 dark:bg-gray-100 dark:text-black dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-700 dark:focus:ring-gray-400 flex items-center justify-center cursor-pointer">
          <span className="text-black">Sort by</span>
          <img src={dropdown} alt="dropdown" className="h-6 w-6 ml-2" />
        </div>
      </div>
      <div className="my-10 mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {category_products.map((product) => {
          return <Item key={product.id} ItemObj={product} />;
        })}
      </div>

      <div className="flex justify-center items-center my-20 text-2xl">
        <button className="bg-gray-900 text-white px-8 py-6 rounded-full transform transition-transform duration-200 hover:scale-105 hover:bg-gray-300 hover:text-black">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
