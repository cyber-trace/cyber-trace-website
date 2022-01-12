import React from "react";
import Image from "next/image";
const myLoader = ({ src }) => {
  return `${src}`;
};
const OverlapImage = ({ img1, img2 }) => {
  return (
    <div
      className="relative mb-24 right-10 w-44 h-56 md:w-52 md:h-64"
      // style={{ width: "277px", height: "326px", marginBottom: "163px" }}
    >
      <div>
        <Image
          loader={myLoader}
          className="w-52 object-cover"
          src={img1.src}
          alt={img1.alt}
          // layout="fill"
        />
      </div>
      <div className="absolute w-44 h-56 md:w-52 md:h-64 top-24 left-1/3">
        <Image
          loader={myLoader}
          className="w-52 object-cover"
          src={img2.src}
          alt={img2.alt}
          // layout="fill"
        />
      </div>
    </div>
  );
};

export default OverlapImage;
