import { OverlapImage } from "@/atoms";
import React from "react";
import info from "constants/About-info.json";

const About = () => {
  return (
    <div>
      {info.map(({ title, text, img1, img2 }, index) => (
        <div
          key={index}
          className="grid sm:grid-cols-2 items-center mb-20"
          style={{
            direction: index % 2 != 0 ? "rtl" : "ltr",
          }}
        >
          <div className="text-white mx-20" style={{ direction: "ltr" }}>
            {title && (
              <h3 className="font-semibold mb-5 text-3xl"> {title} </h3>
            )}
            <p className="text-sm "> {text} </p>
          </div>
          <div className="flex justify-center">
            <OverlapImage img1={img1} img2={img2} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
