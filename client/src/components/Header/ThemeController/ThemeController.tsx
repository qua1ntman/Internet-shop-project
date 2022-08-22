import React, { SetStateAction, useContext } from "react";
import { appContext } from "../../../App";
import "./ThemeController.scss";

export const ThemeController = () => {
  const { theme, setTheme } = useContext(appContext) as {
    theme: string;
    setTheme: React.Dispatch<SetStateAction<string>>;
  };

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
    bodyBack.style.background = theme === "dark" ? "white" : "rgb(56, 54, 68)";
  };

  return (
    <div className="theme-container">
      <span className="theme-title">Theme: {theme}</span>
      <button
        className="theme"
        onClick={themeHandler}
        style={
          theme === "light"
            ? {
                left: "1px",
                right: "",
                backgroundColor: "black",
              }
            : {
                left: "",
                right: "1px",
                backgroundColor: "white",
              }
        }
      >
        <span
          style={
            theme === "light"
              ? {
                  left: "1px",
                  right: "",
                  backgroundColor: "white",
                }
              : {
                  left: "",
                  right: "1px",
                  backgroundColor: "black",
                }
          }
        ></span>
      </button>
    </div>
  );
};
