import React from "react";
import ParallaxScreen from "../components/ParallaxScreen";

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-red-100 px-4 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div
          data-aos="fade-right"
          className="space-y-6 font-semibold z-10 text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start items-center shadow-purple-500/50 p-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="60"
              height="60"
              className="drop-shadow-lg"
            >
              <path
                d="M2 12h20v2H2zm12.707-5.293l1.414 9l1.707 1.707-1.414 z"
                fill="rgb(72 0 119)"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Music Chats
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base px-2 md:px-0">
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
            View project
          </a>
        </div>

        {/* Avatar */}
        <div data-aos="fade-left" className="flex justify-center items-center">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <ParallaxScreen />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
