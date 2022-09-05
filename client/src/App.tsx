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

// import { About } from "./pages/About/About";
import { Register } from "./pages/Register/Register";
import {
  setBackgroundColor,
} from "./helpers/themeStyleChanger";
import { ICategoryData, IProductData } from "./interfaces/dataInterface";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import { CategoryProvider } from "./contexts/CategoryContext";
import { getCategories } from "./queries/categoryQueries";
import { Loader } from "./components/Loader/Loader";
import { IDecodedToken } from "./interfaces/decodedToken";
import { AppProvider } from "./contexts/AppContext";
import { storageStateUpdator } from "./helpers/storageStateUpdator";


// Контекст для пропсов, в данном случае для useState хука внутри App
export const appContext = createContext(Object) as unknown as Context<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  color: string;
  backgroundColor: string;
  setChosenProduct: Dispatch<SetStateAction<IProductData>>;
  categories: ICategoryData[]
  token: string,
  setToken: Dispatch<SetStateAction<string>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decodedToken: IDecodedToken
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDecodedToken: Dispatch<SetStateAction<IDecodedToken>>
}>;

// Установка body backgroundColor в зависимости от темы
setBackgroundColor()

export const App = () => {

  const [
    categories, 
    setCategories
  ] = useState<ICategoryData[]>(
    localStorage.getItem('categories') 
    ? JSON.parse(localStorage.getItem('categories')!) 
    : [] as ICategoryData[]);

  useEffect(() => {
    getCategories()
      .then((res) => {
        const categoryData: ICategoryData[] = res.data;
        storageStateUpdator(setCategories, categoryData, 'categories')
      })
      .catch((e: Error) => {
        console.log(e.message);
      }); 
  }, []);

  if (!categories || categories.length === 0) return <Loader/>

  return (
    <AppProvider 
      props={{ 
        categories, 
        setCategories
      }}
      >
      <CategoryProvider>
        <ShoppingCartProvider>
          <Router>
              <Routes>
                <Route 
                  path={"/*"} 
                  element={<Content />} 
                />
                <Route path={"login"} element={<Login />} />
                <Route path={"register"} element={<Register />} />
                <Route path={"*"} element={<ErrorPage />} />
              </Routes>
          </Router>
        </ShoppingCartProvider>
      </CategoryProvider>
    </AppProvider>
  );
};
