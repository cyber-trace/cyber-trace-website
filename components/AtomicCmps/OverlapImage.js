import React from "react";
import Image from "next/image";

const OverlapImage = ({ img1, img2 }) => {
  return (
    <div
      className="relative"
      style={{ width: "277px", height: "326px", marginBottom: "163px" }}
    >
      <div className="absolute w-full h-full">
        <Image src={img1.src} alt={img1.alt} layout="fill" />
      </div>
      <div className="absolute w-full h-full top-1/2 left-1/2">
        <Image src={img2.src} alt={img2.alt} layout="fill" />
      </div>
    </div>
  );
};

export default OverlapImage;
