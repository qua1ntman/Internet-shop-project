import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import { appContext } from "../../App";
import { useCategory } from "./../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ICategoryData } from "../../interfaces/dataInterface";

export const Nav = () => {
  const { color, backgroundColor, categories } = useContext(appContext);

  const { 
    clickedCategory, 
    setClickedCategory, 
    setClickedSubcategory,
  } = useCategory();

  const handleCategory = (
    item: ICategoryData
  ) => {
    setClickedCategory(item)
    console.log(clickedCategory);
    // e.preventDefault()
    if (!item.subcategories[0]) return
    getSubcategory(item.subcategories[0].id)
      .then((res) => {
        console.log('chose ', res.data.title);
        setClickedSubcategory(res.data)
      })
      .catch((err: Error) => {
        console.log(err.message)
      })
  }

  return (
    <nav className="main-nav" style={{ backgroundColor }}>
      <ul>
        {categories!.map((item) => (
          <li
            key={item.title}
            className={clickedCategory?.title === item.title ? "link-active" : ""}
          >
            <Link
              style={{ color }}
              to={clickedCategory?.title === item.title ? "#" : item.title.toLowerCase()}
              onClick={() => handleCategory(item)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
