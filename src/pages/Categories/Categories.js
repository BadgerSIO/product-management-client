import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
  const storedCategories = useLoaderData();
  const [categories, setCategories] = useState(storedCategories);
  const deleteItem = (cate) => {
    const affirm = window.confirm(
      `Are you sure you want to delete ${cate.name}`
    );
    if (affirm) {
      fetch(`http://localhost:5000/deleteCat/${cate._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const currentCats = categories.filter(
              (cat) => cat._id !== cate._id
            );
            console.log(currentCats);
            setCategories(currentCats);
          }
        });
    }
  };
  if (categories.length > 0) {
    return (
      <div className="p-5 bg-slate-50">
        <h1 className="text-xl capitalize font-semibold">
          Product Category list
        </h1>
        <h2 className="text-sm mt-2 mb-5">View product Category</h2>
        <div>
          <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-4 xl:gap-5 py-2 px-3 mt-5 bg-white  border border-gray-200">
            <div className=" xl:col-span-1 ">
              <h1>Category Name</h1>
            </div>
            <div className=" xl:col-span-2 ">
              <h1>Category Description</h1>
            </div>
            <div className=" xl:col-span-1 ">
              <h1>Action</h1>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:block">
            {categories.map((cat) => (
              <Category
                key={cat._id}
                cat={cat}
                deleteItem={deleteItem}
              ></Category>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <p className="p-5">
        No categories found. Create categories
        <Link to="/addcategory" className="text-theme">
          {" "}
          here
        </Link>
      </p>
    );
  }
};

export default Categories;
