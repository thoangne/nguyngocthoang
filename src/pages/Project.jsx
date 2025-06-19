import React from "react";
import ParallaxScreen from "../components/ParallaxScreen";

const Project = () => {
  //The Parallax Effect: USING REACT
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-red-100 px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}

        <div data-aos="fade-right" className="space-y-6 font-semibold z-10">
          <div className="flex items-center  shadow-purple-500/50 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              className="drop-shadow-lg"
            >
              <path
                d="M2 12h20v2H2zm12.707-5.293l1.414 9l1.707 1.707-1.414  z"
                fill="rgb(72 0 119)"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Music Chats
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Built with React, Tailwind CSS, and Zustand, it uses Node.js,
            MongoDB, and Socket.io for the backend and real-time chat. Music
            Chat is the perfect space for enjoying music and connecting with
            fellow music lovers.
          </p>
          <a
            href="https://spotichat-wef5.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#6b46c1",
              color: "white",
              padding: "0.5rem 1.5rem",
              borderRadius: "9999px",
              boxShadow: "0 10px 15px -3px rgba(72, 0, 255, 0.3)",
              transition: "all 0.5s",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "relative", zIndex: 10 }}>
              View project
            </span>
          </a>
        </div>
        {/* Avatar */}
        <div data-aos="fade-left" className="flex justify-center">
          <ParallaxScreen />
        </div>
      </div>
    </section>
  );
};

export default Project;
