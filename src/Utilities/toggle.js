import React from "react";
import { ThemeContext } from "./themeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="relative z-30">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" bg-white focus:outline-none p-1.5 md:p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="shadow-sm shadow-dark-accent bg-white focus:outline-none  p-1.5 md:p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <svg
            className="w-3 h-3 md:w-4 md:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Toggle;
