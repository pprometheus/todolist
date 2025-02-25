import React from "react";

const variantMap = {
  primary: {
    normal: "border border-black-500 p-2 rounded-sm w-70",
    normal_r: "border border-blue-500 p-2 rounded-sm w-70",
    focus: "focus:border-blue-700 focus:outline-none",
    disabled: "bg-gray-200 cursor-not-allowed",
  },
  secondary: {
    normal: "border border-gray-500 p-2 rounded-md",
    focus: "focus:border-gray-700 focus:outline-none",
    disabled: "bg-gray-300 cursor-not-allowed",
  },
};

const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  variant = "primary",
  disabled = false,
}) => {
  const variantStyles = variantMap[variant] || variantMap.primary; 
  const { normal, focus, disabled: disabledStyles } = variantStyles;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${normal} ${focus} ${disabled ? disabledStyles : ""}`}
      disabled={disabled}
    />
  );
};

export default Input;
