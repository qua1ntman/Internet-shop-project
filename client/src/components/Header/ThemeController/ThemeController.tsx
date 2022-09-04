import React from "react";
import { useApp } from "../../../contexts/AppContext";
import "./ThemeController.scss";

export const ThemeController = () => {
  
  const { theme, setTheme, color } = useApp();

  //Хендлер для смены темы и обновления значения 'theme' в localStorage
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      localStorage.getItem("theme")
        ? localStorage.getItem("theme") === "light"
          ? "dark"
          : "light"
        : theme
    );
    let bodyBack = document.body as HTMLBodyElement;
    theme === "light"
      ? bodyBack.classList.add("dark")
      : bodyBack.classList.remove("dark");
  };

  return (
    <div className="theme-container">
      <span className="theme-title" style={{ color }}>
        Theme
      </span>
      <button
        className="theme"
        onClick={themeHandler}
        style={
          theme === "light"
            ? {
                left: "1px",
                right: "",
                background:
                  "linear-gradient(0.25turn, #6a6a77, #54635e, #4d6853)",
              }
            : {
                left: "",
                right: "1px",
                background:
                  "linear-gradient(0.25turn, #d9d9f3, #ceefe4, #9dd3a8)",
              }
        }
      >
        <span
          style={
            theme === "light"
              ? {
                  left: "1px",
                  right: "",
                  background:
                    "linear-gradient(0.25turn, #d9d9f3, #ceefe4, #9dd3a8)",
                }
              : {
                  left: "",
                  right: "1px",
                  background:
                    "linear-gradient(0.25turn, #6a6a77, #54635e, #4d6853)",
                }
          }
        ></span>
      </button>
    </div>
  );
};
