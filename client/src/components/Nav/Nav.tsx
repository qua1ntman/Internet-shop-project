import React from "react"
import { Link } from 'react-router-dom'
import './Nav.scss'

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
      </ul>
    </nav>
  )
}