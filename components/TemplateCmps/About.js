import { OverlapImage } from "@/atoms";
import React from "react";

const About = () => {
  return (
    <div className="grid sm:grid-cols-2  items-center">
      <div className="text-white mx-20">
        <p className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar
          neque laoreet suspendisse interdum consectetur libero id faucibus
          nisl. Id aliquet risus feugiat in ante metus.
        </p>
      </div>
      <div className="flex justify-center">
        <OverlapImage
          img1={{ src: "/image.jpg", alt: "xxx" }}
          img2={{ src: "/image.jpg", alt: "xxx" }}
        />
      </div>
    </div>
  );
};

export default About;
