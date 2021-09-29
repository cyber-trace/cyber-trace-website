import React from "react";

const SectionTitle = ({ name, title }) => {
  return (
    <div className="relative">
      <h1
        className="text-gray-900 text-9xl"
        style={{
          WebkitTextStroke: "1px #fff",
          lineHeight: ".85",
        }}
      >
        {name}
      </h1>
      <h2 className="absolute bottom-0 text-white text-3xl m-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
