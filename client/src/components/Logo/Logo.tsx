import React from "react";
import LogoImage from "../../assets/png/logo.png";
import "./Logo.scss";

export const Logo = () => {
  return (
    <div className="logo">
        <img src={LogoImage} alt="logo" />
    </div>
  );
};
