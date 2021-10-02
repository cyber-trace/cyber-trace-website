import React from "react";

const InputField = ({ text, type = "text", required = false, onChange }) => {
  return (
    <input
      type={type}
      required={required}
      placeholder={`Enter your ${text} ...`}
      className="bg-gray-800 p-2 text-white rounded-md outline-none"
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default InputField;
