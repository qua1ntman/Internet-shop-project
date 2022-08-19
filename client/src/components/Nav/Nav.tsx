import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { appContext } from "../../App";

export const Nav = () => {
  const { color, backgroundColor } = useContext(appContext) as {
    color: string;
    backgroundColor: string;
  };

  return (
    <nav style={{ backgroundColor }}>
      <ul>
        <li>
          <Link style={{ color }} to="/main">
            Main
          </Link>
        </li>
        <li>
          <Link style={{ color }} to="/product">
            Product
          </Link>
        </li>
        <li>
          <Link style={{ color }} to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};
