import React from "react";

const InputField = ({ text }) => {
  return (
    <input
      type="text"
      placeholder={text}
      className="bg-gray-700 p-2 text-white rounded-md outline-none"
    />
  );
};

export default InputField;
