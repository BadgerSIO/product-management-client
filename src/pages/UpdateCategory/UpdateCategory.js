import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCategory = () => {
  const { description, name } = useLoaderData();

  return <div>{name}</div>;
};

export default UpdateCategory;
