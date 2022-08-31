import React, { useContext } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { appContext } from "../../App";
import "./Category.scss";
import { useCategory } from "../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ProductCardContainer } from "../../components/ProductCardContainer/ProductCardContainer";
import { Loader } from "../../components/Loader/Loader";

export const Category = () => {
  const { color } = useContext(appContext);

  const { 
    setClickedSubcategory, 
    clickedCategory,
    clickedSubcategory
  } = useCategory();

  const handleSubcategoryChange = (id: number) => {
    getSubcategory(id)
      .then((res) => {
        setClickedSubcategory(res.data)
      })
      .catch((e: Error) => {
        console.log(e.message)
      })
  }
  
  const isDataExist = () => {
    console.log('clickedCategory', clickedCategory);
    console.log('clickedSubcategory', clickedSubcategory);
    console.log('clickedCategory!.subcategories.length > 0', clickedCategory!.subcategories.length > 0);
    
    return clickedCategory && clickedSubcategory 
      && clickedCategory!.subcategories.length > 0
  }

  console.log(clickedCategory);
  

  return (
    <div className="category-data-container">
      {!isDataExist() && <Loader />}
      {isDataExist() && 
        <>
          <div className="subcategories">
            {clickedCategory!.subcategories.map((item) => {
              return (
                <Link
                  className={clickedSubcategory!.title === 
                    item.title ? "link-active" : ""}
                  style={{ color }}
                  key={item.id}
                  to={item.title === clickedSubcategory!.title ? "#" : item.title.toLowerCase()}
                  onClick={() => handleSubcategoryChange(item.id)}
                >{item.title}</Link>
              );
            })}
          </div>
          <Routes>
            {clickedCategory!.subcategories.map((subcategory, i) => {
              if (i === 0) {
                return (
                  <>
                    <Route
                      key={"base"}
                      path={'/'}
                      element={
                        <Navigate 
                          to={subcategory.title.toLowerCase()} 
                        />
                      }
                    />
                    <Route
                      key={subcategory.title}
                      path={subcategory.title.toLowerCase()}
                      element={
                        <ProductCardContainer
                          // products={subcategory.products}
                        />
                      }
                    />
                  </>
                );
              }
              return (
                <Route
                  key={subcategory.title}
                  path={subcategory.title.toLowerCase()}
                  element={
                    <ProductCardContainer
                      // products={subcategory.products}
                    />
                  }
                />
              );
            })}
          </Routes>
        </>
      }
    </div>
  );
};
