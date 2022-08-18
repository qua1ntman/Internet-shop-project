import React, { SetStateAction, useContext } from "react"
import { appContext } from "../../App";
import { themeTextChanger } from "../../helpers/themeStyleChanger";

export const Main = () => {
  const { theme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <div className="main-page">
      <h2
        style={themeTextChanger(theme)}
      >Main</h2>
    </div>
  )
}