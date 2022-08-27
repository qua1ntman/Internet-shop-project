import React, { createContext, useContext, ReactNode, useState } from "react"
import { data } from "../@types/data"

const CategoryContext = createContext({} as {
  clickedSubcategory: string, 
  setClickedSubcategory: (value: React.SetStateAction<string>) => void,
  clickedCategory: string,
  setClickedCategory: (value: React.SetStateAction<string>) => void
})

export const useCategory = () => {
  return useContext(CategoryContext)
}

export const CategoryProvider = ({ children }: {children: ReactNode}) => {
  
  const [clickedSubcategory, setClickedSubcategory] = useState<string>('');  
  
  const [clickedCategory, setClickedCategory] = useState<string>(data[0].name);

  return (
    <CategoryContext.Provider
      value={{
        clickedSubcategory,
        setClickedSubcategory,
        clickedCategory,
        setClickedCategory
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
