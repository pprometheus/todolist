import React, { children } from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded hover: cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
