import React from "react";
import { FaPlus } from "react-icons/fa";

const AddProducts = () => {
  return (
    <div className="p-5 bg-slate-50">
      <h1 className="text-xl capitalize font-semibold">Product Add</h1>
      <h2 className="text-sm">Create new product</h2>
      <div className="pt-5">
        <form className="border border-gray-200 p-10 rounded bg-white">
          <div className="grid xl:grid-cols-2 xl:gap-5">
            <div>
              <label className="font-semibold">Product Name</label>
              <br />
              <input
                name="name"
                type="text"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Product Image Url</label>
              <br />
              <input
                name="photoUrl"
                type="url"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Product Image Url</label>
              <br />
              <input
                name="photoUrl"
                type="url"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Product Image Url</label>
              <br />
              <input
                name="photoUrl"
                type="url"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
          </div>
          <br />
          <label className="font-semibold">Category Description</label>
          <br />
          <textarea
            name="description"
            rows="4"
            className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
          ></textarea>
          <br />
          <button className="flex justify-center items-center py-2 px-3 border border-theme bg-theme text-white rounded hover:scale-95 ">
            <FaPlus className="mr-3"></FaPlus> Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
