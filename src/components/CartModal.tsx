"use client";
import Image from "next/image";
import Link from "next/link";

const CartModal = () => {
  const isCardEmpty = false;

  return (
    <div className="p-4 absolute top-8 right-0 shadow-[0_2px_12px_rgb(0,0,0,0.14)] w-max flex flex-col rounded-md gap-4">
      {isCardEmpty ? (
        <div>Card is empty</div>
      ) : (
        <>
          {/* TITLE */}
          <h2 className="font-semibold text-lg ">Shoping Card</h2>
          {/* ITEMS */}
          <div className="flex flex-col gap-6">
            {/* ITEM CARD */}
            <div className="flex gap-3">
              {/* IMAGE */}
              <Image
                src="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                width={72}
                height={44}
                className="rounded-md"
              />
              {/* TEXTS */}
              <div className="w-full flex flex-col justify-between">
                {/* TITLE AND SUBTITLE */}
                <div>
                  {/* TITLE AND PRICE */}
                  <div className="flex justify-between w-full items-center">
                    <h3 className="font-semibold">Item Name</h3>
                    <div className="p-1 px-2 bg-gray-100 rounded-sm">$49</div>
                  </div>
                  {/* SUBTITLE */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* QUANTITY AND REMOVE */}
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-gray-500">Qnt 1</span>
                  <Link href="" className="text-sm text-blue-500">
                    Remove
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              {/* IMAGE */}
              <Image
                src="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                alt=""
                width={72}
                height={44}
                className="rounded-md"
              />
              {/* TEXTS */}
              <div className="w-full flex flex-col justify-between">
                {/* TITLE AND SUBTITLE */}
                <div>
                  {/* TITLE AND PRICE */}
                  <div className="flex justify-between w-full items-center">
                    <h3 className="font-semibold">Item Name</h3>
                    <div className="p-1 px-2 bg-gray-100 rounded-sm">$49</div>
                  </div>
                  {/* SUBTITLE */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* QUANTITY AND REMOVE */}
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-gray-500">Qnt 1</span>
                  <Link href="" className="text-sm text-blue-500">
                    Remove
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* TOTAL */}
          <div className="py-2">
            {/* SUBTOTAL */}
            <div className="flex justify-between w-full">
              <h2 className="font-semibold">Subtotal</h2>
              <h2 className="font-semibold">$40.5</h2>
            </div>
            {/* DESCRIPTION */}
            <p className="text-sm text-gray-500">
              Shiping and taxes calculated at checkout
            </p>
          </div>
          {/* BUTTONS */}
          <div className="flex justify-between w-full">
            <button className="rounded-md px-4 py-2 ring-1 ring-gray-300">
              View Cart
            </button>
            <button className="rounded-md px-4 py-2 bg-black text-white">
              Check out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
