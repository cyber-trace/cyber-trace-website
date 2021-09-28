import Image from "next/image";
import React from "react";

const EventCard = ({ title, text, img }) => {
  return (
    <div className="text-white">
      <Image src={img} width={553} height={310} />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};

export default EventCard;
