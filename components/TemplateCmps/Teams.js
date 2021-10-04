import React, { useEffect, useState } from "react";

import { DepartmentCard } from "@/atoms";
import Slider from "react-slick";

const Departments = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 583,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="">
        {/* <button
          className="absolute left-4"
          onClick={() => card !== 0 && setCard(card - 1)}
        >
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
        <button
          className="absolute right-4"
          onClick={() => card !== data.length - limit && setCard(card + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </button> */}
        <div className="mx-auto pb-8 max-w-2xl w-5/6">
          <Slider {...settings} className="w-full">
            {data.map((props, index) => (
              <div key={index} className="flex justify-center p-4 w-60">
                <DepartmentCard {...props} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Departments;
