import React from 'react'
import { Search } from './Search/Search'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/png/logo.png'
import { ThemeController } from '../ThemeController/ThemeController'

export const Header = () => {
  return (
    <header>
      <div className='logo'>          
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <Search />
      <ThemeController />
      <div className='lang'></div>
      <a className='login' href='/login'>
        {localStorage.getItem('token') ? 'Exit' : 'Log in'}
      </a>
      <div className='cart'></div>
    </header>
  )
}
