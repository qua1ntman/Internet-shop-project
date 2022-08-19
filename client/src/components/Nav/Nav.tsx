import React from "react"
import { Link } from 'react-router-dom'
import './Nav.scss'


export const Nav = () => {
  return (
    <nav className="menu">
      <ul className="menu-category">
        {/* <li className="menu-item">
          <Link to='/main'>Main</Link>
        </li> */}
        <li className="menu-item">
          <Link to='men'>Men</Link>
        </li>
        <li className="menu-item">
          <Link to='women'>Women</Link>
        </li>
        <li className="menu-item">
          <Link to='children'>Children</Link>
        </li>
      </ul>
    </nav>
  )
}