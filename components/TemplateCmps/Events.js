import { EventCard } from "@/atoms";
import React from "react";
import info from "constants/Events-info.json";

const Events = () => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {info.map(({ title, text, img }, index) => (
        <EventCard key={index} title={title} text={text} img={img} />
      ))}
    </div>
  );
};

export default Events;
