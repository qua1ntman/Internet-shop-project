import React from "react"
import { Link } from 'react-router-dom'


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