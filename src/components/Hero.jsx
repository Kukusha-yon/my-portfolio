import React, { useState } from "react";
import Email from "./Email";

export default function Hero() {
  const [poppUp, setPoppUp] = useState(false);

  return (
    <div className="w-full">
      <img
        className="inset-0 w-full h-screen object-cover"
        src="https://e0.pxfuel.com/wallpapers/914/372/desktop-wallpaper-developer-for-for-programmers-background.jpg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            I'm Yonatan MERN stack developer
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Are you in need of a MERN stack developer to bring your web projects
            to life? Look no further! With expertise in MongoDB, Express.js,
            React.js, and Node.js, I specialize in crafting dynamic and
            responsive web applications. From sleek user interfaces to robust
            server-side scripting, I have the skills and experience to turn your
            ideas into reality.{" "}
          </p>
          <button
            className=" text-white "
            onClick={() => setPoppUp(true)}
          >
            Contact Me
          </button>
        </div>
      </div>
      <Email trigger={poppUp} setTrigger={setPoppUp}></Email>
    </div>
  );
}
