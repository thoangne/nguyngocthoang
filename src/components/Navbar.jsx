import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import AvatarSwitcher from "./AvatarSwitcher";
export default function Sidebar() {
  const [active, setActive] = useState("home");
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
  }, [active]);

  return (
    <div className="fixed top-0 left-0 h-full w-16 bg-gray-900 text-white z-50 flex flex-col items-center justify-center space-y-6 py-4">
      <AvatarSwitcher />
      {sections.map((section) => (
        <Link
          key={section}
          to={section}
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActive(section)}
          className={`transform -rotate-90 whitespace-nowrap cursor-pointer text-lg font-extrabold px-2 pt-5 pb-2 transition-all relative`}
          style={{
            color: active === section ? "" : "#9ca3af", // white or gray-400
            transform:
              active === section
                ? "rotate(-90deg) scale(1.1)"
                : "rotate(-90deg)",
          }}
          onMouseEnter={(e) => {
            const underline = e.currentTarget.querySelector(".underline-bar");
            if (underline) underline.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            const underline = e.currentTarget.querySelector(".underline-bar");
            if (underline && active !== section) underline.style.opacity = "0";
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
                "linear-gradient(to right, rgb(190 190 190), rgb(131 0 255))", // green to purple
              opacity: active === section ? 1 : 0,
              transition: "opacity 0.3s",
            }}
          />
        </Link>
      ))}
      <div className="flex flex-col items-center space-y-6 text-white ps-5 pt-5">
        <a
          href="https://github.com/thoangne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-all"
        >
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a
          href="https://www.facebook.com/thoang.nguy.4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition-all"
        >
          <FaFacebook className="text-2xl hover:text-blue-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/nguyngocthoang/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-all"
        >
          <FaLinkedin className="text-2xl hover:text-blue-400" />
        </a>
        <a
          href="https://www.instagram.com/nguyngocthoang.4444/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:scale-110 transition-all"
        >
          <FaInstagram className="text-2xl hover:text-pink-400" />
        </a>
      </div>
    </div>
  );
}
