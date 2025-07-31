import React from "react";
import "./ThemeToggle.css";

interface ThemeToggleProps {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        id="theme-toggle"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-switch">
        <div className="toggle-ball">
          {/* Ícones SVG aqui */}
          <svg
            className="icon sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
          </svg>
          <svg
            className="icon moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        </div>
      </label>
    </div>
  );
}
