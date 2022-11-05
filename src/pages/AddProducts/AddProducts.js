import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

import toast, { Toaster } from "react-hot-toast";
const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  // const [pcid, setPid] = useState(null);
  const { user, logout } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
    formState: { isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/categories?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("pmToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            localStorage.removeItem("pmToken");
            return logout();
          }
          return res.json();
        })
        .then((data) => {
          setCategories(data);
        });
    }
  }, [user?.email, logout]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const pName = form.name.value;
  //   const pPhoto = form.photoUrl.value;
  //   const pPrice = form.price.value;
  //   // cat id
  //   const index = form.categor.selectedIndex;
  //   const el = form.childNodes[index];
  //   const pcatId = el.getAttribute("id");
  //   // cat id end
  //   const category = form.categor.value;
  //   const description = form.description.value;
  //   console.log(pName, pPhoto, pPrice, category, description, pcid);
  //   form.reset();
  //   setPid(null);
  // };
  // const handleChange = (e) => {
  //   const index = e.target.selectedIndex;
  //   const el = e.target.childNodes[index];
  //   const option = el.getAttribute("id");
  //   setPid(option);
  // };
  const onSubmit = (data) => {
    data["user"] = user?.email;
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success(` Product added successfully`);
        }
      });
  };
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);
  return (
    <div className="p-5 bg-slate-50">
      <h1 className="text-xl capitalize font-semibold">Product Add</h1>
      <h2 className="text-sm">Create new product</h2>
      <div className="pt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // onSubmit={handleSubmit}
          className="border border-gray-200 p-10 rounded bg-white"
        >
          <div className="grid xl:grid-cols-2 xl:gap-5">
            <div>
              <label className="font-semibold">Product Name</label>
              <br />
              <input
                type="text"
                {...register("name")}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Product Image Url</label>
              <br />
              <input
                type="url"
                {...register("productPhoto")}
                className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
              />
            </div>
            <div>
              <label className="font-semibold">Product Category</label>
              <br />
              <select
                // onChange={handleChange}

                {...register("category", { required: true })}
                required
                className="select w-full border border-gray-200 outline-none focus:outline-none focus:border-theme rounded  mt-3 mb-5 p-3 "
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option id={cat._id} key={cat._id} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span>
                  <small>This is required</small>
                </span>
              )}
            </div>
            <div>
              <label className="font-semibold">Product Price</label>
              <br />
              <input
                name="price"
                type="number"
                {...register("price")}
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
            {...register("description")}
            className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
          ></textarea>
          <br />
          <button
            type="submit"
            className="flex justify-center items-center py-2 px-3 border border-theme bg-theme text-white rounded hover:scale-95 "
          >
            <FaPlus className="mr-3"></FaPlus> Add Category
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default AddProducts;
