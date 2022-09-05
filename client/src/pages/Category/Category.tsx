import React, { useEffect } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./Category.scss";
import { useCategory } from "../../contexts/CategoryContext";
import { getSubcategory } from "../../queries/categoryQueries";
import { ProductCardContainer } from "../../components/ProductCardContainer/ProductCardContainer";
import { Loader } from "../../components/Loader/Loader";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';
import { useApp } from "../../contexts/AppContext";
import Burger from "../../assets/svg/burger.svg";
import DOMPurify from "dompurify";

export const Category = () => {
  const { color } = useApp();

  const { 
    setClickedSubcategory, 
    clickedCategory,
    clickedSubcategory,
    setSort
  } = useCategory();

  const clickedBurger = () => {
    let x = document.getElementById("subcategories") as HTMLElement;
    if(x.className === "subcategories") {
      x.className += " responsive";
    } else {
      x.className = "subcategories";
    }
  }

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
          <div className="subcategories" id="subcategories">
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
            <span 
              className="burger"
              onClick={clickedBurger}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Burger) }}
            ></span>
          </div>
          <Routes>
            <Route
              key={"base"}
              path={'/'}
              element={
                <Navigate 
                  to={clickedCategory!.subcategories[0].title.toLowerCase()} 
                />
              }
            />
            {clickedCategory!.subcategories.map((subcategory) => {
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
