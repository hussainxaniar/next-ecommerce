import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="flex flex-row w-full overflow-x-scroll scrollbar-hide">
      <div className="flex flex-row gap-8 items-center ">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="h-96 relative ">
            <Image
              src="https://images.pexels.com/photos/27405437/pexels-photo-27405437/free-photo-of-car-style.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-lg tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
