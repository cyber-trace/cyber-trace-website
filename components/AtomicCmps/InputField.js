import React from "react";

const InputField = ({ text, type = "text", required = false, onChange }) => {
  return (
    <div>
      <label className="text-white m-2 block">{text}</label>
      <input
        type={type}
        required={required}
        placeholder={`Enter your ${text}`}
        className="bg-lightGray p-3 w-full placeholder-gray-400 text-white rounded-md outline-none text-xs"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
