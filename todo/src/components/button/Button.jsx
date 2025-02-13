import React from "react";

const Button = ({ children, className, onClick, disabled=false }) => {
  return (
    <button
      className={`px-4 py-2 rounded hover:cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
