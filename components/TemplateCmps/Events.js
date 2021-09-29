import { EventCard } from "@/atoms";
import React from "react";

const Events = () => {
  return (
    <div className="grid  gap-10 sm:grid-cols-2">
      <EventCard title="JIPO" text="Cyber trace rock !" img="/image.jpg" />
      <EventCard title="JIPO" text="Cyber trace rock !" img="/image.jpg" />
      <EventCard title="JIPO" text="Cyber trace rock !" img="/image.jpg" />
    </div>
  );
};

export default Events;
