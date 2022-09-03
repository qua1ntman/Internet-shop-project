import React, { createContext, useContext, ReactNode, useState } from "react";
import { ICategoryData, ISubCategoryData } from "../interfaces/dataInterface";

const CategoryContext = createContext(
  {} as {
    clickedSubcategory: ISubCategoryData | null;
    setClickedSubcategory: 
      (value: React.SetStateAction<ISubCategoryData | null>) => void;
    clickedCategory: ICategoryData | null;
    setClickedCategory: 
      (value: React.SetStateAction<ICategoryData | null>) => void;
  }
);

export const useCategory = () => {
  return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [
    clickedSubcategory, 
    setClickedSubcategory
  ] = useState<ISubCategoryData | null>(null);

  const [
    clickedCategory, 
    setClickedCategory
  ] = useState<ICategoryData | null>(null);

  return (
    <CategoryContext.Provider
      value={{
        clickedSubcategory,
        setClickedSubcategory,
        clickedCategory,
        setClickedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};