import React from "react";

const variantMap = {
  add: "bg-yellow-500 text-white border-yellow-600 hover:bg-yellow-600",
  done: "bg-green-500 text-white border-green-600 hover:bg-green-600",
  undo: "bg-blue-500 text-white border-blue-600 hover:bg-blue-600",
  remove: "bg-red-500 text-white border-red-600 hover:bg-red-600",
  default: "bg-gray-500 text-white border-gray-600 hover:bg-gray-600",
};

const Button = ({ children, variant = "default", onClick, disabled = false, ...props }) => {
  // Checking for invalid props
  if (Object.keys(props).length > 0 && !["variant", "onClick", "disabled"].includes(Object.keys(props)[0])) {
    // throw new Error("Invalid prop passed to Button component");
  }

  const classes = variantMap[variant] || variantMap.default;

  return (
    <button
      className={`px-4 py-2 rounded border-2 hover:cursor-pointer ${classes} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
