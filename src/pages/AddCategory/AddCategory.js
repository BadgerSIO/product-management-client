import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const AddCategory = () => {
  const [category, setCategory] = useState({});
  const { user } = useContext(AuthContext);

  const handleCatSubmit = (e) => {
    e.preventDefault();
    category["user"] = user.email;
    const form = e.target;
    fetch(`https://product-management-server-omega.vercel.app/addCategory`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${category.name} category added`);
          form.reset();
          setCategory({});
        }
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newCategory = { ...category };
    newCategory[field] = value;
    setCategory(newCategory);
  };
  return (
    <div className="p-5 bg-slate-50">
      <h1 className="text-xl capitalize font-semibold">Product Add Category</h1>
      <h2 className="text-sm">Create new product Category</h2>
      <div className="pt-5">
        <form
          onSubmit={handleCatSubmit}
          className="border border-gray-200 p-10 rounded bg-white"
        >
          <div className="grid xl:grid-cols-2 xl:gap-5">
            <div>
              <label className="font-semibold">Category Name</label>
              <br />
              <input
                onChange={handleChange}
                name="name"
                type="text"
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Category Image Url</label>
              <br />
              <input
                onChange={handleChange}
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
            onChange={handleChange}
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
      <Toaster className="z-50" />
    </div>
  );
};

export default AddCategory;
