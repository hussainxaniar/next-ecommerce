import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="flex flex-col w-full gap-3 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80">
          <Image
            src="https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-0"
          />
        </div>
        <div className="flex flex-col gap-1 mb-">
          <div className="flex flex-row justify-between items-center">
            <h2 className=" font-bold">Product Name</h2>
            <h2 className=" font-bold">$35</h2>
          </div>
          <div className="text-sm text-gray-600">Description Here</div>
        </div>

        <button className="ring-1 ring-primary text-primary hover:bg-primary hover:text-white w-max rounded-full px-4 py-2">
          Add to cart
        </button>
      </Link>
      <Link
        href="/"
        className="flex flex-col w-full gap-3 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80">
          <Image
            src="https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-0"
          />
        </div>
        <div className="flex flex-col gap-1 mb-">
          <div className="flex flex-row justify-between items-center">
            <h2 className=" font-bold">Product Name</h2>
            <h2 className=" font-bold">$35</h2>
          </div>
          <div className="text-sm text-gray-600">Description Here</div>
        </div>

        <button className="ring-1 ring-primary text-primary hover:bg-primary hover:text-white w-max rounded-full px-4 py-2">
          Add to cart
        </button>
      </Link>
      <Link
        href="/"
        className="flex flex-col w-full gap-3 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80">
          <Image
            src="https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-10 hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-0"
          />
        </div>
        <div className="flex flex-col gap-1 mb-">
          <div className="flex flex-row justify-between items-center">
            <h2 className=" font-bold">Product Name</h2>
            <h2 className=" font-bold">$35</h2>
          </div>
          <div className="text-sm text-gray-600">Description Here</div>
        </div>

        <button className="ring-1 ring-primary text-primary hover:bg-primary hover:text-white w-max rounded-full px-4 py-2">
          Add to cart
        </button>
      </Link>
      <Link
        href="/"
        className="flex flex-col w-full gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80">
          <Image
            src="https://images.pexels.com/photos/26152872/pexels-photo-26152872/free-photo-of-man-walking-towards-a-shop.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-10 object-cover hover:opacity-0 transition-opacity ease duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw"
            className="h-24 rounded-md absolute object-cover z-0 object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 mb-">
          <div className="flex flex-row justify-between items-center">
            <h2 className=" font-bold">Product Name</h2>
            <h2 className=" font-bold">$35</h2>
          </div>
          <div className="text-sm text-gray-600">Description Here</div>
        </div>

        <button className="ring-1 ring-primary text-primary hover:bg-primary hover:text-white w-max rounded-full px-4 py-2">
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
