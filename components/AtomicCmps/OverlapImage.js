import React from "react";
import Image from "next/image";

const OverlapImage = ({ img1, img2 }) => {
  return (
    <div>
      <div>
        <Image src={img1.src} alt={img2.alt} />
      </div>
      <div>
        <Image src={img1.src} alt={img2.alt} />
      </div>
    </div>
  );
};

export default OverlapImage;
