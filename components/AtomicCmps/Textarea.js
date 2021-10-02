import React from "react";

const Textarea = ({ required = true, onChange }) => {
  return (
    <textarea
      placeholder="Enter your message ..."
      className="bg-gray-700 h-64 p-4 text-white rounded-md outline-none resize-y w-full"
      required={required}
      onChange={(e) => onChange && onChange(e.target.value)}
    ></textarea>
  );
};

export default Textarea;
