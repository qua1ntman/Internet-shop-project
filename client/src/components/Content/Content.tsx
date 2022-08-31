import React, { useContext } from "react";
import { appContext } from "../../App";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import "./Content.scss";
import { ToTop } from "../ToTop/ToTop";
import { ICategoryData, IProductData } from "../../interfaces/dataInterface";
import { Category } from "../../pages/Category/Category";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { Product } from "../../pages/Product/Product";
import { Store } from "../../pages/Store/Store";
import { useEffect } from "react";
import { getSubcategory } from "../../queries/categoryQueries";
import { useCategory } from "../../contexts/CategoryContext";

export const Content = ({ categories, chosenProduct }: {
  categories: ICategoryData[], 
  chosenProduct: IProductData | undefined
}) => {
  
  const { backgroundColor } = useContext(appContext);

  const { 
    setClickedSubcategory, 
    clickedCategory,
  } = useCategory();

  useEffect(() => {
    console.log(123);
    if (clickedCategory && clickedCategory!.subcategories.length > 0) {
      getSubcategory(clickedCategory!.subcategories[0].id)
        .then((res) => {
          setClickedSubcategory(res.data)
        })
        .catch((e: Error) => {
          console.log(e.message)
        })
    }
  }, [clickedCategory, setClickedSubcategory])

  return (
    <>
      <Header />
      <div className="container">
        <Nav />
      </div>
      <main style={{ backgroundColor }}>
        <div className="container">
          <Routes>
            <Route path={"/"} element={<Navigate to={"main"} />} />
            <Route path={"main"} element={<Store />} />
            {categories.map((item: ICategoryData) => {
              return (
                <Route
                  key={item.title}
                  path={`${item.title}/*`}
                  element={<Category />}
                />
              );
            })}
            <Route
              path={`/product/${chosenProduct?.id}`}
              element={<Product product={chosenProduct} />}
            />
            <Route path={"*"} element={<ErrorPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <ToTop />
    </>
  );
};
