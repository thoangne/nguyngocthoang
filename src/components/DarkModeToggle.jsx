import { CiCloudMoon } from "react-icons/ci";
import { PiSunLight } from "react-icons/pi";

export default function DarkModeToggle({ setIsDark }) {
  const toggleDark = () => {
    const current = localStorage.getItem("dark-mode") === "true";
    const updated = !current;
    localStorage.setItem("dark-mode", updated.toString());

    document.documentElement.classList.toggle("dark", updated);
    setIsDark(updated); // cập nhật lên App
  };

  const isDark = localStorage.getItem("dark-mode") === "true";

  return (
    <button
      onClick={toggleDark}
      className="mt-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded p-5"
    >
      {isDark ? (
        <PiSunLight className="w-6 h-6" />
      ) : (
        <CiCloudMoon className="w-6 h-6" />
      )}
    </button>
  );
}
