import React from "react";

const InputField = ({ text, type = "text", required = false }) => {
  return (
    <input
      type={type}
      required={required}
      placeholder={`Enter your ${text} ...`}
      className="bg-gray-800 p-2 text-white rounded-md outline-none"
    />
  );
};

export default InputField;
