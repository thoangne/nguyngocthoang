import React, { useEffect, useState } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiJsonwebtokens,
  SiRedux,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

const Home = () => {
  const techIcons = [
    { Icon: SiReact, name: "React" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiExpress, name: "Express" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiTailwindcss, name: "TailwindCSS" },
    { Icon: SiFirebase, name: "Firebase" },
    { Icon: SiJsonwebtokens, name: "JWT" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiSocketdotio, name: "Socket.IO" },
    { Icon: SiTypescript, name: "TypeScript" },
  ];

  return (
    <section
      id="home"
      className="text-foreground min-h-screen px-6 sm:px-10 md:px-20 flex items-center justify-center relative"
    >
      <div className="text-center space-y-6 max-w-4xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 animate-floating tracking-wider hover:animate-flip transition-transform">
          N G U Y N G O C T H O A N G
        </h1>
        <h2
          style={{
            backgroundImage:
              "linear-gradient(to right, rgb(190 190 190), rgb(131 0 255))",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 50%",
            animation: "gradient-x 5s ease infinite",
          }}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold"
        >
          Web Developer - Intern level
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6">
          {techIcons.map(({ Icon, name }, i) => (
            <div
              key={i}
              title={name}
              className="text-3xl sm:text-4xl p-2 bg-gray-800 rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
