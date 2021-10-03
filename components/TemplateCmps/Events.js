import React from "react";

import { EventCard } from "@/atoms";

const Events = ({ data }) => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data.map(({ title, text, img }, index) => (
        <EventCard key={index} title={title} text={text} img={img} />
      ))}
    </div>
  );
};

export default Events;
