import React from "react";
import { Link as NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaListUl } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Header from "../Header/Header";
import { HiMenuAlt1 } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-gray-50">
        {/* <!-- Page content here --> */}

        <label
          htmlFor="my-drawer-2"
          className="drawer-button absolute lg:hidden cursor-pointer text-2xl top-2 left-2"
        >
          <HiMenuAlt1 />
        </label>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 border-r border-r-gray-200 text-base-content space-y-2">
          {/* <!-- Sidebar content here --> */}
          <li>
            <img
              src="https://dreamspos.dreamguystech.com/laravel/template/public/assets/img/logo.png"
              alt=""
              className="w-52"
            />
          </li>
          <li>
            <NavLink className="focus:bg-theme focus:text-white" to="/">
              <FaListUl /> Product List
            </NavLink>
          </li>
          <li>
            <NavLink className="focus:bg-theme focus:text-white">
              <FaCartPlus />
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className="focus:bg-theme focus:text-white"
              to="/categories"
            >
              <BiCategoryAlt /> Category List
            </NavLink>
          </li>
          <li>
            <NavLink
              className="focus:bg-theme focus:text-white"
              to="/addcategory"
            >
              <AiOutlineAppstoreAdd /> Add Category
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
