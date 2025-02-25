import React from "react";

const Header = ({ title }) => {
  return (
    <div className="text-3xl font-mono  text-gray-800 py-6 flex justify-around">
      {title}
    </div>
  );
};

export default Header;
