export const getJWTtoken = (user) => {
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
      //   navigate("/");
    });
};
