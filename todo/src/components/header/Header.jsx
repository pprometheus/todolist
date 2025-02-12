import React from "react";

const Header = ({ title, className }) => {
  return (
    <div className={`text-3xl font-semibold text-gray-800 ${className} py-6`}>
      {title}
    </div>
  );
};

export default Header;
