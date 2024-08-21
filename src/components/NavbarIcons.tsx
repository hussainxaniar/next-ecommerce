"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const router = useRouter();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // TEMPORATY
  const isLogedIn = false;

  const handleIsProfileOpen = () => {
    if (isLogedIn) {
      router.push("/login");
      return;
    }

    setIsProfileOpen((prev) => !prev);
    setIsCartOpen(false);
  };

  const handleIsCardOpen = () => {
    setIsCartOpen((prev) => !prev);
    setIsProfileOpen(false);
  };

  return (
    <div className="flex items-center gap-4 relative ">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleIsProfileOpen}
      />
      {isProfileOpen && (
        <div className="p-3 shadow-[0_2px_12px_rgb(0,0,0,0.14)] z-20 flex flex-col gap-4 absolute top-8 rounded-md min-w-24 bg-white">
          <Link href="/">Profile</Link>
          <Link href="/">Logout</Link>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative">
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={handleIsCardOpen}
        />
        {isCartOpen && <CartModal />}
        <div className="absolute w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm -top-4 -right-4">
          3
        </div>
      </div>
    </div>
  );
};

export default NavbarIcons;
