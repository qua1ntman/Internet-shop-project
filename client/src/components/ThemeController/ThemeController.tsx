import React, { SetStateAction, useContext } from 'react'
import { appContext } from '../../App';

import './ThemeController.scss'

export const ThemeController = () => {

  const { theme, setTheme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  const themeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme);
  }

  return (
    <button className='theme' onClick={themeHandler}>
      <span></span>
    </button>
  )
}
