import React from "react";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ThemeController } from "./ThemeController/ThemeController";
import { Logo } from "../Logo/Logo";

export const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <Search />
      <ThemeController />
      <div className="lang"></div>
      <Link className="login" to="/login">
        {localStorage.getItem("token") ? "Exit" : "Log in"}
      </Link>
      <div className="cart"></div>
    </header>
  );
};
