import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const GoogleFbSignUp = () => {
  const { googleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogle = (e) => {
    e.preventDefault();
    googleSingIn()
      .then((result) => {
        const user = result.user;
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
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-between text-sm space-x-5 ">
      <button
        onClick={handleGoogle}
        className="py-2 w-full border border-gray-300 my-5 hover:bg-theme hover:border-theme hover:text-white flex justify-center items-center"
      >
        <FcGoogle className="mr-2 text-lg" /> Sign in with google
      </button>
    </div>
  );
};

export default GoogleFbSignUp;
