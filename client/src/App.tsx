import React, { Context, Dispatch, SetStateAction } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Category } from "./pages/Category/Category";
import { Login } from "./pages/Login/Login";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Content } from "./components/Content/Content";
import { Main } from "./pages/Main/Main";
import { Register } from "./pages/Register/Register";
import {
  themeTextChanger,
  themeBackChanger,
} from "./helpers/themeStyleChanger";

// Контекст для пропсов, в данном случае для useState хука внутри App
export const appContext = React.createContext(Object) as unknown as Context<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  color: string;
  backgroundColor: string;
}>;

// Установка body backgroundColor в зависимости от темы
document.body.style.backgroundColor = localStorage.getItem("theme")
  ? localStorage.getItem("theme") === "light"
    ? ""
    : "#464545"
  : "";

export const App = () => {
  // Хук для изменения темы
  const [theme, setTheme] = React.useState<string>(
    localStorage.getItem("theme") || "light"
  );

  let { color } = themeTextChanger(theme);
  let { backgroundColor } = themeBackChanger(theme);

  return (
    <Router>
      <appContext.Provider value={{ theme, setTheme, color, backgroundColor }}>
        <Routes>
          <Route path="/" element={<Content />}>
            <Route path="/" element={<Navigate to={'main'} />} />
            <Route path="main" element={<Main />} />
            <Route path="men" element={<Category />} />
            <Route path="women" element={<Category />} />
            <Route path="children" element={<Category />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </appContext.Provider>
    </Router>
  );
};
