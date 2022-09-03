import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.scss";
import { appContext } from "../../App";
import { useCategory } from "./../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ICategoryData } from "../../interfaces/dataInterface";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';

export const Nav = () => {
  const { color, backgroundColor, categories } = useContext(appContext);

  const navigate = useNavigate()

  const { 
    clickedCategory, 
    setClickedCategory, 
    setClickedSubcategory,
    clickedSubcategory,
  } = useCategory();

  const handleCategory = (
    item: ICategoryData
  ) => {
    localStorageStateUpdator(setClickedCategory, item, 'category')
    
    getSubcategory(item.subcategories[0].id)
      .then((res) => {
        localStorageStateUpdator(setClickedSubcategory, res.data, 'subcategory')
        navigate(clickedCategory?.title === item.title ? "#" : item.title.toLowerCase())
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
