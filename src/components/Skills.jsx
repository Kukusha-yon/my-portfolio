import React from "react";

export default function Skills() {
  return (
    <div className="max-w-[1400px]  mx-auto my-10 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      <div className="lg:top-20 relative lg:col-span-1 md:col-span-2 lg:mx-auto lg:max-w-[800px] ">
        <h3 className="text-2xl text-white font-bold">
          Unlocking Potential
        </h3>
        <p className="pt-4 text-white">
          I bring proficiency in MongoDB, Express.js, React.js, and Node.js to
          the table. From crafting responsive user interfaces to building
          scalable backend systems, my expertise ensures the seamless execution
          of web projects. Additionally, my proficiency extends to frontend
          technologies such as HTML, CSS, and JavaScript, alongside experience
          in version control with Git and collaboration on platforms like
          GitHub. Coupled with a dedication to continuous learning and a knack
          for problem-solving, I am poised to tackle challenges and drive
          innovation in any team or project. Ready to elevate your digital
          endeavors? Let’s connect and explore how my skills can propel your
          vision forward.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://inzint.com/wp-content/uploads/2023/02/Features-of-Mern-stack-development-services-You-Should-Know-1.png"
          alt="skills"
        />
        <img
          className="md:row-span-2 object-cover w-full h-full rounded-full"
          src="https://serokell.io/files/0u/0ufu1q21.js-ts.jpg"
          alt="skills"
        />
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://miro.medium.com/v2/resize:fit:1400/1*Hm-G7dLwMZtLOPWbL6nkww.jpeg"
          alt="skills"
        />
        
      </div>
    </div>
  );
}

