import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center items-center">
      <img
        src="https://images2.imgbox.com/bd/0c/SSvvomhV_o.png"
        alt=""
        className="w-96"
      />
      <Link to="/">
        <button className="py-2 px-3 border border-theme capitalize hover:bg-theme hover:text-white">
          Go to home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
