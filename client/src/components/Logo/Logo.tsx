import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from "../../assets/png/logo.png";
import './Logo.scss'

export const Logo = () => {
  return (
    <div className="logo">
    <Link to="/">
      <img src={LogoImage} alt="logo" />
    </Link>
  </div>
  )
}
