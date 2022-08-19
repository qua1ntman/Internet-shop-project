import React, { SetStateAction, useContext } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../../App'
import { themeBackChanger } from '../../helpers/themeStyleChanger';
import { themeTextChanger } from './../../helpers/themeStyleChanger';
import './Nav.scss'

export const Nav = () => {

  const { theme } = useContext(appContext) as 
  { theme: string; setTheme: React.Dispatch<SetStateAction<string>>; }

  return (
    <nav
      style={themeBackChanger(theme)}
    >
      <ul>
        {/* <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/main'
          >Main</Link>
        </li> */}
        <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/men'
          >Men</Link>
        </li>
        <li>
          <Link 
            style={themeTextChanger(theme)}
            to='/women'
          >Women</Link>
        </li>
        <li>
        <Link 
            style={themeTextChanger(theme)}
            to='/children'
          >Children</Link>
        </li>
      </ul>
    </nav>
  )
}