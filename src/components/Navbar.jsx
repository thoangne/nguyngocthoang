import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import AvatarSwitcher from "./AvatarSwitcher";

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = ["home", "about", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      let minDistance = Infinity;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderIconLinks = (flexcol) => (
    <div className={`flex ${flexcol} items-start gap-4 mt-6 ps-2`}>
      <a
        href="https://github.com/thoangne"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-2xl hover:text-gray-400 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.facebook.com/thoang.nguy.4"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook className="text-2xl hover:text-blue-500 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.linkedin.com/in/nguyngocthoang/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-2xl hover:text-blue-400 hover:scale-110 transition-transform" />
      </a>
      <a
        href="https://www.instagram.com/nguyngocthoang.4444/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram className="text-2xl hover:text-pink-400 hover:scale-110 transition-transform" />
      </a>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-16 bg-gray-900 text-white z-50 flex-col items-center justify-center space-y-6 py-4">
        <AvatarSwitcher />
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => setActive(section)}
            className="transform -rotate-90 whitespace-nowrap cursor-pointer text-lg font-extrabold px-2 pt-5 pb-2 transition-all relative"
            style={{
              color: active === section ? "" : "#9ca3af",
              transform:
                active === section
                  ? "rotate(-90deg) scale(1.1)"
                  : "rotate(-90deg)",
            }}
          >
            {section}
            <span
              className="underline-bar"
              style={{
                display: "block",
                position: "absolute",
                left: 0,
                bottom: "18px",
                width: "100%",
                height: "3px",
                borderRadius: "9999px",
                background:
                  "linear-gradient(to right, rgb(190 190 190), rgb(131 0 255))",
                opacity: active === section ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />
          </Link>
        ))}
        {renderIconLinks("flex-col")}
      </div>

      {/* Mobile Avatar Button */}
      <div className="flex justify-between mx-5 items-center  lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="focus:outline-none mt-3"
        >
          <AvatarSwitcher />
        </button>
        <div className="flex gap-4">{renderIconLinks("  ")}</div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50">
          <div className="bg-white text-black w-4/5 h-full p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <FaTimes className="text-2xl text-gray-700" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {sections.map((section) => (
                <Link
                  key={section}
                  to={section}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold border-b pb-2 cursor-pointer"
                >
                  {section.toUpperCase()}
                </Link>
              ))}
            </div>
            {renderIconLinks("")}
          </div>
        </div>
      )}
    </>
  );
}
