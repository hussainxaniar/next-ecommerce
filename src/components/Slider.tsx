"use client";

import { transform } from "next/dist/build/swc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Summer Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/27540338/pexels-photo-27540338/free-photo-of-a-woman-in-a-white-dress-is-leaning-on-a-log.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Sprint Sales Collection",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

  const [current, setCurrent] = useState(0);

  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     setCurrent((prev)=>(prev === slides.length - 1 ? 0 : prev + 1))
  //   },3000)

  //   return () => clearInterval(interval);
  // },);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden relative z-0">
      <div
        className="h-full w-max flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row gap-16`}
            key={index}
          >
            <div className="w-full xl:w-1/2  h-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl xl:text-3xl 2xl:text-5xl font-semibold px-8">
                {slide.description}
              </h2>
              <h1 className="text-5xl xl:text-6xl 2xl:text-8xl font-semibold px-8">
                {slide.title}
              </h1>
              <Link href="/">
                <button className="rounded-md bg-black text-white py-2 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="w-full xl:w-1/2 h-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-8 flex items-center justify-center gap-4 left-1/2">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 flex items-center cursor-pointer justify-center rounded-full ring-1 ring-gray-600 ${
              current === index ? "scale-150" : ""
            }`}
            key={index}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
