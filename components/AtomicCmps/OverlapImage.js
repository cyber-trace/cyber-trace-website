import React from "react";
import Image from "next/image";

const OverlapImage = ({ img1, img2 }) => {
  return (
    <div
      className="relative mb-20"
      // style={{ width: "277px", height: "326px", marginBottom: "163px" }}
    >
      <div className="w-52 h-64">
        <Image
          className="w-52 object-cover"
          src={img1.src}
          alt={img1.alt}
          layout="fill"
        />
      </div>
      <div className="absolute w-52 h-64 top-24 left-1/2">
        <Image
          className="w-52 object-cover"
          src={img2.src}
          alt={img2.alt}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default OverlapImage;
