
import React, { SetStateAction, useContext } from "react"
import { appContext } from "../../App";
import { themeTextChanger } from "../../helpers/themeStyleChanger";

export const Cart = () => {

  const { theme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <div className="cart-page">
      <h2
        style={themeTextChanger(theme)}
      >Cart</h2>
    </div>
  )
}