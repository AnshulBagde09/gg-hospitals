import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-11
        h-11
        rounded-xl
        flex
        items-center
        justify-center
        bg-slate-100
        dark:bg-slate-800
        hover:scale-105
        transition
      "
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-slate-700" />
      )}
    </button>
  );
}

export default ThemeToggle;