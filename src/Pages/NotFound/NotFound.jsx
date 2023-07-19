import React from "react";
import image from "../../../src/assest/404.jpg";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={image} alt="" />
    </div>
  );
};

export default NotFound;
