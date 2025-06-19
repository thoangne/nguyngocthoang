import Navbar from "./components/Navbar.jsx";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // Theo dõi thay đổi dark-mode
  useEffect(() => {
    const handleStorage = () => {
      const darkMode = localStorage.getItem("dark-mode") === "true";
      setIsDark(darkMode);
    };

    // Nghe sự kiện thay đổi từ localStorage
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div
      className={`${
        isDark ? "bg-svg-dark" : "bg-svg-light"
      } bg-background text-foreground min-h-screen transition-colors duration-500 scroll-smooth`}
    >
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle setIsDark={setIsDark} />
      </div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Thoang. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
