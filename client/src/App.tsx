import React, { Context, createContext, Dispatch, SetStateAction, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import { Category } from "./pages/Category/Category";

import { Login } from "./pages/Login/Login";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Content } from "./components/Content/Content";
import { Register } from "./pages/Register/Register";
import {
  themeTextChanger,
  themeBackChanger,
} from "./helpers/themeStyleChanger";
import { data } from "./@types/data";
import { ICategory, IProduct } from "./interfaces/dataInterface";
import { ProductCardContainer } from "./components/ProductCardContainer/ProductCardContainer";

import { Store } from "./pages/Store/Store";
import { ShoppingCartProvider } from "./pages/Basket/ShoppingCartContext";
import { Product } from "./pages/Product/Product";
import { CategoryProvider } from "./contexts/CategoryContext";

// Контекст для пропсов, в данном случае для useState хука внутри App
export const appContext = createContext(Object) as unknown as Context<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  color: string;
  backgroundColor: string;
  setChosenProduct: Dispatch<SetStateAction<IProduct | undefined>>;
}>;

// Установка body backgroundColor в зависимости от темы
if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark')
  }
}


export const App = () => {

  const [chosenProduct, setChosenProduct] = useState<IProduct>()

  // Хук для изменения темы
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  let { color } = themeTextChanger(theme);
  let { backgroundColor } = themeBackChanger(theme);

  return (
    <ShoppingCartProvider>
      <CategoryProvider>
        <Router>
          <appContext.Provider
            value={{ 
              theme,
              setTheme,
              color,
              backgroundColor,
              setChosenProduct
            }}
          >
            <Routes>
              <Route path={"/"} element={<Content />}>
                <Route path={"/"} element={<Navigate to={"main"} />} />
                <Route path={"main"} element={<Store />} />
                {data.map((item: ICategory) => {
                  console.log(item);
                  return (
                    <Route
                      key={item.name}
                      path={item.name}
                      element={<Category categoryData={item} />}
                    >
                      {item.subCategories.map((subcategory, i) => {
                        if (i === 0) {
                          return (
                            <>
                              <Route
                                key={"base"}
                                path={"/" + item.name}
                                element={<Navigate to={subcategory.name} />}
                              />
                              <Route
                                key={subcategory.name}
                                path={subcategory.name}
                                element={
                                  <ProductCardContainer
                                    products={subcategory.products}
                                  />
                                }
                              />
                            </>
                          );
                        }
                        return (
                          <Route
                            key={subcategory.name}
                            path={subcategory.name}
                            element={
                              <ProductCardContainer
                                products={subcategory.products}
                              />
                            }
                          />
                        );
                      })}
                    </Route>
                  );
                })}
                <Route path={`/product/${chosenProduct?.id}`} element={<Product product={chosenProduct} />}/>
                <Route path={"*"} element={<ErrorPage />} />
              </Route>
              <Route path={"login"} element={<Login />} />
              <Route path={"register"} element={<Register />} />
              <Route path={"*"} element={<ErrorPage />} />
            </Routes>
          </appContext.Provider>
        </Router>
      </CategoryProvider>
    </ShoppingCartProvider>
  );
};
