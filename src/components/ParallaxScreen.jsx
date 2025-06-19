import React, { useRef } from "react";

const ParallaxScreen = () => {
  const screenRef = useRef();

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      screenRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15;
    const y = (e.clientY - top - height / 2) / 15;

    screenRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseLeave = () => {
    screenRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div
      className="parallax-wrapper w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto transition-transform duration-500"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="parallax-screen rounded-xl overflow-hidden shadow-2xl transition-transform duration-500"
        ref={screenRef}
      >
        <div className="screen-content w-full h-auto object-cover block">
          <img src="./1.png" alt="" className="screen-img" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxScreen;
