import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav  = () => {
    setNav(!nav);
    if(!nav){
        document.body.style.overflow = 'hidden'
    }else {
        document.body.style.overflow = 'scroll'
    }
  }

  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-20"></h1>
      <HiMenuAlt3  onClick={handleNav} className="z-20 text-white cursor-pointer rounded" size={25} />
      <div
        className={
          nav
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className="flex flex-col fixed h-full w-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Contact</li>
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">About</li>
        </ul>
      </div>
    </div>
  );
}
