import React from "react";

const Textarea = ({ required = true }) => {
  return (
    <textarea
      placeholder="Enter your message ..."
      className="bg-gray-700 p-4 text-white rounded-md outline-none resize-y w-full"
      required={required}
    ></textarea>
  );
};

export default Textarea;
