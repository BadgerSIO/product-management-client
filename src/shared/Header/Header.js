import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const logOut = () => {
    logout().then(() => {
      navigate("/login");
    });
  };
  return (
    <div className="navbar bg-base-100 border-b border-b-gray-100 pl-5">
      <div className="flex-1"></div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          {user?.photoURL ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
          ) : (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <FaUser />
            </label>
          )}

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
