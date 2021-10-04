import React from "react";

import { OverlapImage } from "@/atoms";

const About = ({ data }) => {
  return (
    <div>
      {data.map(({ title, text, img1, img2 }, index) => (
        <div
          key={index}
          // className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-2 justify-items-center items-center mb-4"
          className={`${index % 2 != 0 ? "md:flex-row-reverse" : "md:flex-row"}
          flex flex-col  gap-8 justify-center items-center mb-4
          `}
          style={
            {
              // direction: index % 2 != 0 ? "rtl" : "ltr",
            }
          }
        >
          <div
            className="text-white md:w-2/4"
            // style={{ direction: "ltr" }}
          >
            {title && (
              <h3 className="font-semibold mb-5 text-3xl"> {title} </h3>
            )}
            <p className="text-sm "> {text} </p>
          </div>
          <div
            // className={`${index % 2 != 0 ? "md:justify-end" : "md:justify-center"} self-center ml-4 flex `}
            // className="self-center ml-4 flex"
            className="flex-auto w-full md:w-auto flex justify-center"
          >
            <OverlapImage img1={img1} img2={img2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
