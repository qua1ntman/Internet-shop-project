import React, {
  Context,
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import { Login } from "./pages/Login/Login";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Content } from "./components/Content/Content";
import { About } from "./pages/About/About";
import { Register } from "./pages/Register/Register";
import {
  themeTextChanger,
  themeBackChanger,
} from "./helpers/themeStyleChanger";
import { ICategoryData, IProductData } from "./interfaces/dataInterface";
import { ShoppingCartProvider } from "./pages/Basket/ShoppingCartContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { getCategories } from "./queries/categoryQueries";
import { Loader } from "./components/Loader/Loader";
import { Store } from './pages/Store/Store';
import { data } from "./@types/data";


// Контекст для пропсов, в данном случае для useState хука внутри App
export const appContext = createContext(Object) as unknown as Context<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  color: string;
  backgroundColor: string;
  setChosenProduct: Dispatch<SetStateAction<IProductData | undefined>>;
  categories: ICategoryData[] | undefined
  token: string,
  setToken: Dispatch<SetStateAction<string>>
}>;

// Установка body backgroundColor в зависимости от темы
if (localStorage.getItem("theme") 
  && localStorage.getItem("theme") === "dark"
  ) {
    document.body.classList.add("dark");
}

export const App = () => {

  const [chosenProduct, setChosenProduct] = useState<IProductData>();

  const [token, setToken] = useState<string>(localStorage.getItem('token') || '')

  // Хук для изменения темы
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  const [categories, setCategories] = useState<ICategoryData[]>();

  useEffect(() => {
    getCategories()
      .then((res) => {
        const categoryData: ICategoryData[] = res.data;
        console.log(categoryData);
        setCategories(categoryData);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  }, [setCategories]);

  let { color } = themeTextChanger(theme);
  let { backgroundColor } = themeBackChanger(theme);

  if (!categories || categories.length === 0) return <Loader/>

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
              setChosenProduct,
              categories,
              token,
              setToken
            }}
          >
            <Routes>
              <Route 
                path={"/*"} 
                element={<Content 
                  categories={categories} 
                  chosenProduct={chosenProduct}
                />} 
              />
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
