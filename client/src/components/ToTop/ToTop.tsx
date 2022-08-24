import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../App";
import "./ToTop.scss";

export const ToTop = () => {
  const { color } = useContext(appContext) as {
    color: string;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      onClick={scrollToTop}
      style={{
        color,
        borderColor: color,
      }}
      className="to-top-btn"
      to={"#"}
    >
      &#5123;
    </Link>
  );
};
