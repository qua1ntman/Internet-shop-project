import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import "./Content.scss";
import { ToTop } from "../ToTop/ToTop";
import { ICategoryData } from "../../interfaces/dataInterface";
import { Category } from "../../pages/Category/Category";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { Product } from "../../pages/Product/Product";
import { Store } from "../../pages/Store/Store";
import { About } from "../../pages/About/About";
import { useApp } from "../../contexts/AppContext";


export const Content = () => {
  
  const { backgroundColor, categories, chosenProduct } = useApp();

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
            <Route path={"about"} element={<About/>} />
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
