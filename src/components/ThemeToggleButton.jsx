import { Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="theme-toggle-btn">
      {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggleButton;
