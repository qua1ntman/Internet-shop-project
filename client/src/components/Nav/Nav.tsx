import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import { useCategory } from "./../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ICategoryData } from "../../interfaces/dataInterface";
import { useApp } from "../../contexts/AppContext";
import { storageStateUpdator } from "../../helpers/storageStateUpdator";

export const Nav = () => {

  const { color, backgroundColor, categories } = useApp();

  const navigate = useNavigate()

  const { 
    clickedCategory, 
    setClickedCategory, 
    setClickedSubcategory,
    setSort
  } = useCategory();

  const handleCategory = (
    item: ICategoryData
  ) => {
    if (clickedCategory.title !== item.title) {
      storageStateUpdator(setClickedCategory, item, 'category')
      let emptyStr = ''
      storageStateUpdator(setSort, emptyStr, 'sort', 'session')
      getSubcategory(item.subcategories[0].id)
        .then((res) => {
          storageStateUpdator(setClickedSubcategory, res.data, 'subcategory')
          navigate(item.title.toLowerCase())
        })
        .catch((err: Error) => {
          console.log(err.message)
        })
    }
  }

  return (
    <nav className="main-nav" style={{ backgroundColor }}>
      <ul id="nav-category" className="nav-category">
        {categories!.map((item) => (
          <li
            key={item.title}
            className={clickedCategory?.title === item.title ? "link-active" : ""}
          >
            <div
              className="link-like"
              style={{ color }}
              onClick={() => handleCategory(item)}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
