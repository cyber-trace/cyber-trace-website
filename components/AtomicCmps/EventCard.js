import Image from "next/image";
import React from "react";
const myLoader = ({ src }) => {
  return `${src}`;
};
const EventCard = ({ title, text, img }) => {
  return (
    <div className="text-white max-w-sm mx-auto ">
      <Image
        loader={myLoader}
        className="object-cover"
        src={img}
        width={553}
        height={310}
        layout="responsive"
        alt=""
      />
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="text-limit text-sm">{text}</p>
    </div>
  );
};

export default EventCard;
