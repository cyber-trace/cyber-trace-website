import Image from "next/image";
import React from "react";

const EventCard = ({ title, text, img }) => {
  return (
    <div className="text-white">
      <Image className="object-cover" src={img} width={553} height={310} />
      <h3 className="text-lg">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default EventCard;
