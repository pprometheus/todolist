import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`py-4 px-6 shadow-lg rounded-sm mb-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
