import React from "react";

const Textarea = ({ required = true, onChange }) => {
  return (
    <div>
      <label className="text-white m-2 block">Message</label>
      <textarea
        placeholder="Enter your message ..."
        className="bg-lightGray h-64 p-4 text-white rounded-md outline-none resize-y w-full"
        required={required}
        onChange={(e) => onChange && onChange(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Textarea;
