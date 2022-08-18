import React, { SetStateAction, useContext } from "react"
import { Link } from 'react-router-dom'
import './Nav.scss'
import { appContext } from "../../App";
import { themeBackChanger } from "../../helpers/themeStyleChanger";
import { themeTextChanger } from './../../helpers/themeStyleChanger';

export const Nav = () => {

  const { theme } = useContext(appContext) as 
  { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <nav
      style={themeBackChanger(theme)}
    >
      <ul>
        <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/'
          >Main</Link>
        </li>
        <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/product'
          >Product</Link>
        </li>
        <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/cart'
          >Cart</Link>
        </li>
      </ul>
    </nav>
  )
}