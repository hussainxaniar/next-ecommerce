"use client";

import { useState } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Sprint Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="h-full w-max flex transition-all ease-in-out duration-100">
        {slides.map((slide, index) => (
          <div
            className="w-screen h-full flex flex-col xl:flex-row "
            key={index}
          >
            <div className="w-full xl:w-1/2  h-1/2 xl:h-full bg-gray-100"></div>
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
