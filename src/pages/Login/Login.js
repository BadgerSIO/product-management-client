import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { googleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleGoogle = (e) => {
    e.preventDefault();
    googleSingIn(googleProvider)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className=" flex justify-center items-center">
        <div className="bg-slate-50 rounded-md border border-gray-100 w-full lg:w-3/4 p-10 ">
          <img
            src="https://dreamspos.dreamguystech.com/laravel/template/public/assets/img/logo.png"
            alt=""
            className="w-44"
          />
          <h1 className="text-xl capitalize font-semibold pt-5 pb-2">
            Sign In
          </h1>
          <h2 className="text-sm">Please login to your account</h2>
          <form className="mt-5">
            <div className="">
              <div>
                <label className="font-semibold capitalize">email</label>
                <br />
                <input
                  name="name"
                  type="text"
                  className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
                />
              </div>
              <div>
                <label className="font-semibold capitalize">Password</label>
                <br />
                <input
                  name="password"
                  type="password"
                  className="border border-gray-200 outline-none focus:border-theme rounded w-full mt-3 mb-5 p-3"
                />
              </div>
            </div>

            <br />
            <button className="flex justify-center items-center py-2 px-3 border border-theme bg-theme text-white rounded hover:bg-orange-500 w-full">
              Sign In
            </button>
            <p className="text-center text-sm my-5">
              Do you have an account?{" "}
              <Link className="text-theme font-semibold">Sign Up</Link>
            </p>
            <div className="grid grid-cols-3 gap-5 ">
              <hr className="my-auto" />
              <p className="text-sm text-gray-300 text-center">
                Or sign up with
              </p>
              <hr className="my-auto" />
            </div>

            <div className="flex justify-between text-sm space-x-5 ">
              <button
                onClick={handleGoogle}
                className="py-2 w-1/2 border border-gray-300 my-5 hover:bg-theme hover:border-theme hover:text-white"
              >
                Sign in with google
              </button>
              <button className="py-2 w-1/2 border border-gray-300 my-5 hover:bg-theme hover:border-theme hover:text-white">
                Sign in with facebook
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co/wy0YH8R/login-Registration.png"
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
