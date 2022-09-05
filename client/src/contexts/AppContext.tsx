import React, {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IProductData, ICategoryData } from "../interfaces/dataInterface";
import { IDecodedToken } from "../interfaces/decodedToken";
import jwt_decode from 'jwt-decode'
import { themeTextChanger, themeBackChanger } from "../helpers/themeStyleChanger";
import { IProductDataAndAmount } from './../interfaces/dataInterface';

// Контекст для пропсов, в данном случае для useState хука внутри App
export const AppContext = createContext(Object) as unknown as Context<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  color: string;
  backgroundColor: string;
  chosenProduct: IProductData;
  setChosenProduct: Dispatch<SetStateAction<IProductData>>;
  categories: ICategoryData[];
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  decodedToken: IDecodedToken;
  setDecodedToken: Dispatch<SetStateAction<IDecodedToken>>;
  cardProducts: IProductDataAndAmount[]
  setCardProducts: Dispatch<SetStateAction<IProductDataAndAmount[]>>
}>;

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ 
  children, 
  props
 }: { 
  children: ReactNode, 
  props: {
    categories: ICategoryData[], 
    setCategories: Dispatch<SetStateAction<ICategoryData[]>>
  } }) => {
  
  const [
    cardProducts, 
    setCardProducts
  ] = useState(
    sessionStorage.getItem('cardProducts') 
      ? JSON.parse(sessionStorage.getItem('cardProducts')!) 
      : [] as IProductDataAndAmount[]
  )

  const [
    chosenProduct, 
    setChosenProduct
  ] = useState<IProductData>(
    localStorage.getItem('product')
    ? JSON.parse(localStorage.getItem('product')!)
    : {} as IProductData);

  const [token, setToken] = useState<string>(localStorage.getItem('token') || '')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [
    decodedToken, 
    setDecodedToken
  ] = useState<IDecodedToken>(
    localStorage.getItem('token') 
      ? jwt_decode(localStorage.getItem('token')!) 
      : {} as IDecodedToken
  )
  // Хук для изменения темы
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "light"
  );

  let { color } = themeTextChanger(theme);
  let { backgroundColor } = themeBackChanger(theme);

  // const [
  //   categories, 
  //   setCategories
  // ] = useState<ICategoryData[]>(
  //   localStorage.getItem('categories') 
  //   ? JSON.parse(localStorage.getItem('categories')!) 
  //   : [] as ICategoryData[]);

    return (
      <AppContext.Provider
        value={{
          theme,
          setTheme,
          color,
          backgroundColor,
          chosenProduct,
          setChosenProduct,
          token,
          setToken,
          decodedToken,
          setDecodedToken,
          cardProducts, 
          setCardProducts,
          ...props
        }}
      >
        {children}
      </AppContext.Provider>

    )
} 