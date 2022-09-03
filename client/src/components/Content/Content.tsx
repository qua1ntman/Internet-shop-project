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

export const Content = ({ categories, chosenProduct }: {
  categories: ICategoryData[], 
  chosenProduct: IProductData | undefined
}) => {
  
  const { backgroundColor } = useContext(appContext);

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
                  key={item.id}
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
