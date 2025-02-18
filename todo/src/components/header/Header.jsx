import React from "react";

const Header = ({ title }) => {
  return (
    <div className="text-3xl font-semibold text-gray-800 py-6">
      {title}
    </div>
  );
};

export default Header;
