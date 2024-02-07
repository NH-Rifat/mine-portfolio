import React from "react";

const Button = ({ styles, text }) => (
  <button
    type="button"
    className={`py-3 px-4 font-primary font-semibold text-[17px] text-gray-900 bg-blue-gradient rounded-[7px] outline-none ${styles} `}
  >
    {text}
  </button>
);

export default Button;
