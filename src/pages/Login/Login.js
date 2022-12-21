import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import GoogleFbSignUp from "../../shared/GoogleFbSignUp/GoogleFbSignUp";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        // get jwt token
        fetch("https://product-management-server-omega.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("pmToken", data?.token);
            console.log(data);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((er) => {
        setError(`${er}`);
        form.reset();
      });
  };
  return (
    <div className="grid md:grid-cols-2 h-screen">
      <div className=" flex justify-center items-center bg-slate-50 md:bg-white">
        <div className="bg-slate-50 rounded-md md:border md:border-gray-100 w-full lg:w-3/4 p-10 ">
          <img
            src="https://dreamspos.dreamguystech.com/laravel/template/public/assets/img/logo.png"
            alt=""
            className="w-44"
          />
          <h1 className="text-xl capitalize font-semibold pt-5 pb-2">
            Sign In
          </h1>
          <h2 className="text-sm">Please login to your account</h2>
          <form onSubmit={handleSubmit} className="mt-5">
            <div className="">
              <div>
                <label className="font-semibold capitalize">email</label>
                <br />
                <input
                  name="email"
                  type="email"
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
            {error ? (
              <p className="text-red-500">
                <small>{error}</small>
              </p>
            ) : (
              <></>
            )}
            <p className="text-center text-sm my-5">
              Do you have an account?{" "}
              <Link to="/register" className="text-theme font-semibold">
                Sign Up
              </Link>
            </p>
            <div className="grid grid-cols-3 gap-5 ">
              <hr className="my-auto" />
              <p className="text-sm text-gray-300 text-center">
                Or sign up with
              </p>
              <hr className="my-auto" />
            </div>

            <GoogleFbSignUp></GoogleFbSignUp>
          </form>
        </div>
      </div>
      <div className="hidden md:block">
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
