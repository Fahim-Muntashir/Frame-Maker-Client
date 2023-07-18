import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-[2500px] sm:px-1 md:px-10 lg:px-20 mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;
