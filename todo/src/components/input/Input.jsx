import React from "react";

const Input = ({ type = "text", value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border-1 p-2 rounded-sm ${className}`}
    />
  );
};

export default Input;
