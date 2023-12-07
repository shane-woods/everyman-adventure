import React from "react";

type ButtonType = {
  onClick: () => void;
  label: string;
};

const Button = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 rounded-lg py-2 px-10 max-w-xs text-xl"
    >
      {label}
    </button>
  );
};

export default Button;
