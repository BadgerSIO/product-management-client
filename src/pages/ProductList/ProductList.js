import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const { user, logout } = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const pages = Math.ceil(count / size);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://product-management-server-omega.vercel.app/products?email=${user?.email}&size=${size}&page=${page}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("pmToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            return logout();
          }
          return res.json();
        })
        .then(({ result, count }) => {
          setProducts(result);
          setCount(count);
        })
        .catch((err) => console.log(err));
    }
  }, [user?.email, logout, page, size]);
  return (
    <div className="p-5">
      <h1 className="text-xl capitalize font-semibold">product list</h1>
      <h2 className="text-sm">Manage your products</h2>
      <div>
        <div className="hidden md:grid md:grid-cols-4  md:gap-5 py-2 px-3 mt-5 bg-white  border border-gray-200">
          <div className="  ">
            <h1 className="semibold capitalize">Product Name</h1>
          </div>
          <div className="  ">
            <h1 className="semibold capitalize">Category </h1>
          </div>
          <div className="  ">
            <h1 className="semibold capitalize">Price</h1>
          </div>
          <div className="  ">
            <h1 className="semibold capitalize">action</h1>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 md:block">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="pagination  mt-5">
        <h1>Currently selected page: {page}</h1>
        <div className="flex">
          {[...Array(pages).keys()].map((num) => (
            <button
              key={num}
              className={`py-1 px-2 mr-2 ${
                num === page ? "bg-theme" : "bg-white"
              }`}
              onClick={() => setPage(num)}
            >
              {num}
            </button>
          ))}
          <select
            onChange={(event) => {
              setSize(event.target.value);
              setPage(0);
            }}
            className="border border-gray-200"
            defaultValue={5}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
