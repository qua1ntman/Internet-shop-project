import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { appContext } from "../../App";
import { data } from "../../@types/data";

export const Nav = () => {
  
  const { color, backgroundColor } = useContext(appContext) as {
    color: string;
    backgroundColor: string;
  };

  const [clickedCategory, setClickedCategory] = useState<string>(data[0].name)

  return (
    <nav className="main-nav" style={{ backgroundColor }}>
      <ul>
        {data.map((item) => (
          <li key={item.name} className={clickedCategory === item.name ? 'link-active' : ''}>
            <Link 
              style={{ color }} 
              to={item.name === clickedCategory ? '#' : item.name} 
              onClick={() => setClickedCategory(item.name)}
            >
              {`${item.name[0].toUpperCase()}${item.name.slice(1)}`}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
