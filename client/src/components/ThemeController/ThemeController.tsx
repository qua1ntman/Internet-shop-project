import React, { SetStateAction, useContext } from 'react';
import { appContext } from '../../App';
import './ThemeController.scss';

export const ThemeController = () => {

  const { theme, setTheme } = useContext(appContext) as 
    { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  const themeHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log(theme);
    let bodyBack = document.body as HTMLBodyElement
    bodyBack.style.background = bodyBack.style.background === 'black' ? 'white' : 'black' 
  }

  return (
    <div className='theme-container'>
      <span className='theme-title'>Theme: {theme}</span>
      <button 
        className='theme' 
        onClick={themeHandler}
        style={theme === 'light' ? {
          left: '1px',
          right: '',
          backgroundColor: 'black'
        } : {
          left: '',
          right: '1px',
          backgroundColor: 'white'
        }}
      >
        <span
          style={theme === 'light' ? {
            left: '1px',
            right: '',
            backgroundColor: 'white'
          } : {
            left: '',
            right: '1px',
            backgroundColor: 'black'
          }}
        ></span>
      </button>
    </div>
  )
}
