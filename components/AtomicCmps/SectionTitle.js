import React from "react";

const SectionTitle = ({ name, title }) => {
  return (
    <div className="relative">
      <h1
        className="text-transparent text-6xl sm:text-8xl font-bold "
        style={{
          WebkitTextStroke: "0.5px #fff",
          lineHeight: ".85",
        }}
      >
        {name}
      </h1>
      <h2 className="absolute bottom-0 text-white font-semibold m-1 ml-10 text-xl sm:text-4xl ">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
