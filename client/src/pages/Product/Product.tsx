import React, { SetStateAction, useContext } from "react"
import { appContext } from "../../App";
import { themeTextChanger } from "../../helpers/themeStyleChanger";

export const Product = () => {
  
  const { theme } = useContext(appContext) as 
  { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <div className="product-page">
      <h2
      style={themeTextChanger(theme)}
      >Product</h2>
    </div>
  )
}