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
    <nav 
      className='main-nav'
      style={{ backgroundColor }}
    >
      <ul>
        {/* <li>
          <Link 
            style={{ color }}
            to='/main'
          >Main</Link>
        </li> */}
        <li>
          <Link style={{ color }} to="/men">
            Men
          </Link>
        </li>
        <li>
          <Link style={{ color }} to="/women">
            Women
          </Link>
        </li>
        <li>
          <Link style={{ color }} to="/children">
            Children
          </Link>
        </li>
      </ul>
    </nav>
  );
};
