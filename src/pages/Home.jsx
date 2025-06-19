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
import { CiDesktopMouse2 } from "react-icons/ci";

const Home = () => {
  const [showMouse, setShowMouse] = useState(true);
  //TODO: SET DARK MODE
  useEffect(() => {
    const handleScroll = () => {
      setShowMouse(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  // `${
  return (
    <section
      id="home"
      className={`    text-foreground h-screen  pl-20 flex items-center justify-center relative`}
    >
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-3xl font-extrabold text-gray-800 animate-floating tracking-wider hover:animate-flip transition-transform">
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
          className="text-3xl font-extrabold"
        >
          Web Developer - Intern level
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {techIcons.map(({ Icon, name }, i) => (
            <div
              key={i}
              title={name}
              className="text-4xl p-2 bg-gray-800 rounded-lg shadow-lg hover:scale-125 transition-transform duration-300"
            >
              <Icon />
            </div>
          ))}
        </div>
        <CiDesktopMouse2
          className={`w-12 h-12 absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-pulse text-gray-600 transition-opacity duration-700 ${
            showMouse ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Mouse icon with smooth fade-in/out */}
    </section>
  );
};

export default Home;
