import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;