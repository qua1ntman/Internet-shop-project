import React, { useContext, useEffect } from "react";
import { ICategory } from "./../../interfaces/dataInterface";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { appContext } from "../../App";
import "./Category.scss";
import { useCategory } from "../../contexts/CategoryContext";

export const Category = ({ categoryData }: { categoryData: ICategory }) => {

  const { color } = useContext(appContext) as { color: string };

  const { 
    clickedSubcategory, 
    setClickedSubcategory, 
    clickedCategory 
  } = useCategory()

  useEffect(() => 
    setClickedSubcategory(categoryData.subCategories[0].name), 
    [clickedCategory]
  )
  
  return (
      <div className="category-data-container">
        <div className="subcategories">
          {categoryData.subCategories.map((item) => {
            return (
              <Link
                className={clickedSubcategory === item.name ? "link-active" : ""}
                style={{ color }}
                key={item.name}
                to={item.name === clickedSubcategory ? "#" : item.name}
                onClick={() => setClickedSubcategory(item.name)}
              >{`${item.name[0].toUpperCase()}${item.name.slice(1)}`}</Link>
            );
          })}
        </div>
        <Outlet />
      </div>
  );
};
