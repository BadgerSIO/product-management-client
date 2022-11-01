import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ cat, deleteItem }) => {
  const { _id, name, description, photoUrl } = cat;
  const defaultUrl =
    "https://dreamspos.dreamguystech.com/laravel/template/public/assets/img/product/noimage.png";
  return (
    <div className="grid space-y-5 md:space-y-0 md:grid-cols-3 xl:grid-cols-4 xl:gap-5 py-3 px-3 bg-white border-t border-t-gray-200 md:border-t-0 border-x border-x-gray-200 border-b border-b-gray-200">
      <div className="xl:col-span-1 flex items-center space-x-3">
        {" "}
        <img
          src={photoUrl ? photoUrl : defaultUrl}
          alt=""
          className="h-10 w-10 object-contain mr-2"
        />
        {name}
      </div>
      <div className="xl:col-span-2  flex items-center">{description}</div>
      <div className="xl:col-span-1 flex items-center">
        <Link className="py-2 px-3 text-white bg-themeSecond text-sm rounded hover:bg-theme mr-2">
          <button className="flex items-center ">
            <FaEdit className="mr-1 text-sm -mt-1" /> Update
          </button>
        </Link>
        <button
          onClick={() => deleteItem(cat)}
          className="flex items-center py-2 px-3 text-white bg-red-500 text-sm rounded hover:bg-red-600"
        >
          <FaTrash className="mr-1 text-xs -mt-1" /> Delete
        </button>
      </div>
    </div>
  );
};

export default Category;
