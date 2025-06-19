import React from "react";
import AvatarCarousel from "../components/AvatarCarousel";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-red-100 px-6 py-16"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div data-aos="fade-right" className="space-y-6 font-semibold z-10">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Hi there 👋
          </h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m Thoang — a third-year Information Technology student at UIT,
            currently living in Ho Chi Minh City. I’m passionate about
            full-stack development, with a strong focus on UI/UX design and API
            architecture. Through personal and academic projects, I’ve been
            honing my skills in creating user-centered interfaces and building
            scalable, efficient backend systems. I’m always eager to learn new
            technologies and take on meaningful challenges in the tech world.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            In my spare time I like to play football, play video games, and
            learn new things. I’m always down for hearing about new projects, so
            feel free to drop me a line.
          </p>
          <a
            href="#contact"
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
              Send me a message
            </span>
          </a>
        </div>
        {/* Avatar */}
        <div data-aos="fade-left" className="flex justify-center">
          <AvatarCarousel />
        </div>
      </div>
    </section>
  );
};

export default About;
