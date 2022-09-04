import React, { createContext, useContext, ReactNode, useState, SetStateAction } from "react";
import { ICategoryData, ISubCategoryData } from "../interfaces/dataInterface";

const CategoryContext = createContext(
  {} as {
    clickedSubcategory: ISubCategoryData;
    setClickedSubcategory: 
      (value: SetStateAction<ISubCategoryData>) => void;
    clickedCategory: ICategoryData;
    setClickedCategory: 
      (value: SetStateAction<ICategoryData>) => void;
    sort: string;
    setSort: (value: SetStateAction<string>) => void;
  }
);

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [
    clickedSubcategory, 
    setClickedSubcategory
  ] = useState<ISubCategoryData>({} as ISubCategoryData);

  const [
    clickedCategory, 
    setClickedCategory
  ] = useState<ICategoryData>(JSON.parse(localStorage.getItem('category')!) || {} as ICategoryData);

  const [sort, setSort] = useState<string>(localStorage.getItem('sort') || '')
  
  return (
    <CategoryContext.Provider
      value={{
        clickedSubcategory,
        setClickedSubcategory,
        clickedCategory,
        setClickedCategory,
        sort,
        setSort
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
