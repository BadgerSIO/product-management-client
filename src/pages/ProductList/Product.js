import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="grid space-y-5 md:space-y-0 md:grid-cols-4 md:gap-5 py-3 px-3 bg-white border-t border-t-gray-200 md:border-t-0 border-x border-x-gray-200 border-b border-b-gray-200 content-start">
      <div className="xl:col-span-1 flex items-start space-x-3">
        <div className="flex items-center capitalize">
          <img
            src={product.productPhoto}
            alt="name"
            className="h-10 w-10 object-contain mr-2"
          />
          {product.name.length > 20
            ? product.name.slice(0, 20) + "..."
            : product.name}
        </div>
      </div>
      <div className="xl:col-span-1 flex items-center">{product.category}</div>
      <div className="xl:col-span-1 flex items-center">${product.price}</div>
      <div className="xl:col-span-1 flex items-start">
        <div className="flex items-center">
          <Link className="py-2 px-3 text-white bg-themeSecond text-sm rounded hover:bg-theme mr-2">
            <button className="flex items-center ">
              <FaEdit className="mr-1 text-sm -mt-1" /> Update
            </button>
          </Link>
          <button className="flex items-center py-2 px-3 text-white bg-red-500 text-sm rounded hover:bg-red-600">
            <FaTrash className="mr-1 text-xs -mt-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
