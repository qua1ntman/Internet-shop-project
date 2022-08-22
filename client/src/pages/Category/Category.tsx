import React, { useContext, useState } from "react";
import { ICategory } from "./../../interfaces/dataInterface";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { appContext } from "../../App";
import "./Category.scss";

export const Category = ({ categoryData }: { categoryData: ICategory }) => {
  
  const { color } = useContext(appContext) as { color: string };

  const [
    clickedSubcategory, 
    setClickedSubcategory
  ] = useState<string>(categoryData.subCategories[0].name)

  return (
    <div className="category-page">
      <h2
        style={{ color }}
      >{`${categoryData.name[0].toUpperCase()}${categoryData.name.slice(
        1
      )}`}</h2>
      <div className="category-data-container">
        <div className="subcategories">
          {categoryData.subCategories.map((item) => {
            return (
              <Link
                className={clickedSubcategory === item.name ? 'link-active' : ''}
                style={{ color }}
                key={item.name}
                to={item.name === clickedSubcategory ? '#' : item.name}
                onClick={() => setClickedSubcategory(item.name)}
              >{`${item.name[0].toUpperCase()}${item.name.slice(1)}`}</Link>
            );
          })}
        </div>
          <Outlet />
      </div>
    </div>
  );
};
