import { useState, useRef, useEffect } from "react";
import Email from "./Email";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
// import img6 from "../assets/img6.jpeg";
// import img7 from "../assets/img7.jpeg";

const Projects = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);
  const [poppUp, setPoppUp] = useState(false);

  // Refs
  const contentRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const nameRef = useRef("");

  const sliderContent = [
    {
      img: img1,
      name: "Weather App",
    },
    {
      img: img2,
      name: "Movie App ",
    },
    {
      img: img3,
      name: "Blog App",
    },
    {
      img: img4,
      name: "Todo List",
    },
    {
      img: img5,
      name: "YouTube",
    },
    {
      img: img6,
      name: "Note App",
    },
    {
      img: img7,
      name: "Calculator App",
    },
  ];

  const Slide = (type) => {
    let local;
    if (type === "next") {
      local = active + 1;
      sliderContent.length - 1 < local ? setActive(0) : setActive(local);
    }
    if (type === "prev") {
      local = active - 1;
      local < 0 ? setActive(sliderContent.length - 1) : setActive(local);
    }
    setPrev(active);
  };

  useEffect(() => {
    contentRef.current.style.bottom = "-100%";
    prevRef.current.style.left = "-10%";
    nextRef.current.style.right = "-10%";
    setTimeout(() => {
      nameRef.current.innerText = sliderContent[active].name;
      contentRef.current.style.bottom = "0%";
      prevRef.current.style.left = "0%";
      nextRef.current.style.right = "0%";
    }, 1000);
  }, [active]);

  return (
    <div>
      <div className="rounded-xl relative shadow-lg  crousel overflow-hidden">
        <h1 className="text-2xl font-bold text-white ">My Projects</h1>
        {/* <h2 className="text-2xl text-white font-bold ">Indulge in Bliss</h2> */} 
        <div className="relative w-[300px] h-[200px] lg:w-[900px] lg:h-[500px]">
          {sliderContent.map((slide, i) => {
            return (
              <img
                src={slide.img}
                key={i}
                alt="slideImg"
                className={`h-full w-100 absolute object-cover  inset-0 duration-[2.5s] ease-out transition-[clip-path] ${
                  i === active ? "clip-visible" : "clip-hidden"
                }`}
              />
            );
          })}
          <img
            src={sliderContent[prev].img}
            alt="previmg"
            className="w-full h-full  object-cover "
          />
        </div>
        <div>
          <button
            id="back"
            className=" ml-8"
            ref={prevRef}
            onClick={() => Slide("prev")}
          >
            <ion-icon name="chevron-back-outline" size="large"></ion-icon>
          </button>
          <button
            id="forward"
            ref={nextRef}
            className="right-0  mr-8"
            onClick={() => Slide("next")}
          >
            <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
          </button>
        </div>
        <div className="content" ref={contentRef}>
          <h1 className="h1 text-gray-200" ref={nameRef}>
            {sliderContent[0].name}
          </h1>
          <p className=".p text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            porro.
          </p>
          {/* <button className="bg-green-500 text-white " onClick={() => setPoppUp(true)}>Book Now</button> */}
        </div>
        <Email trigger={poppUp} setTrigger={setPoppUp}></Email>
      </div>
    </div>
  );
};

export default Projects;
