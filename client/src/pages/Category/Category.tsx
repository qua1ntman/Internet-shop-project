import React, { useContext, useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { appContext } from "../../App";
import "./Category.scss";
import { useCategory } from "../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ProductCardContainer } from "../../components/ProductCardContainer/ProductCardContainer";
import { Loader } from "../../components/Loader/Loader";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';

export const Category = () => {
  const { color } = useContext(appContext);

  const { 
    setClickedSubcategory, 
    clickedCategory,
    clickedSubcategory,
    setSort
  } = useCategory();

  useEffect(() => {
    if (
      JSON.stringify(clickedCategory) !== '{}' 
      && clickedCategory!.subcategories.length > 0
    ) {
      if (localStorage.getItem('subcategory') && JSON.stringify(clickedSubcategory) === '{}') {
        setClickedSubcategory(JSON.parse(localStorage.getItem('subcategory')!))
      } else {
        getSubcategory(JSON.parse(localStorage.getItem('subcategory')!).id)
          .then((res) => {
            localStorageStateUpdator(setClickedSubcategory, res.data, 'subcategory')
          })
          .catch((e: Error) => {
            console.log(e.message)
          })
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleSubcategoryChange = (id: number) => {
    getSubcategory(id)
      .then((res) => {
        localStorageStateUpdator(setClickedSubcategory, res.data, 'subcategory')
      })
      .catch((e: Error) => {
        console.log(e.message)
      })
    let emptySort = ''
    localStorageStateUpdator(setSort, emptySort, 'sort')
  }
  
  const isDataExist = () => {    
    return JSON.stringify(clickedCategory) !== "{}" && JSON.stringify(clickedSubcategory) !== "{}" 
      && clickedCategory!.subcategories.length > 0
  }

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
                        <ProductCardContainer />
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
                    <ProductCardContainer />
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
