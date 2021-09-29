import React from "react";

const SectionTitle = ({ name, title }) => {
  return (
    <div className="relative">
      <h1
        className="text-gray-900 text-9xl "
        style={{
          WebkitTextStroke: "0.5px #fff",
          lineHeight: ".85",
        }}
      >
        {name}
      </h1>
      <h2 className="absolute bottom-0 text-white  font-semibold m-3 ml-10 text-3xl ">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
