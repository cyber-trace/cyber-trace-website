import { DepartmentCard } from "@/atoms";
import React from "react";

const Departments = () => {
  return (
    <div className="flex gap-10">
      <DepartmentCard
        title="Dev Team"
        text="best team ever ..."
        img="/image.jpg"
      />{" "}
      <DepartmentCard
        title="Dev Team"
        text="best team ever ..."
        img="/image.jpg"
      />{" "}
      <DepartmentCard
        title="Dev Team"
        text="best team ever ..."
        img="/image.jpg"
      />
    </div>
  );
};

export default Departments;
