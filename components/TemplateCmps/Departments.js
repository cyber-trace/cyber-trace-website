import React, { useState } from "react";

import { DepartmentCard } from "@/atoms";

const Departments = ({ data }) => {
  const [card, setCard] = useState(0);

  return (
    <div className="flex gap-10">
      <button onClick={() => card !== 0 && setCard(card - 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </button>
      {data.slice(card, Math.min(card + 4, data.length)).map((props, index) => (
        <DepartmentCard key={index} {...props} />
      ))}
      <button onClick={() => card !== data.length - 4 && setCard(card + 1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </button>
    </div>
  );
};

export default Departments;
