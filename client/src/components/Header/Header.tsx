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
        <Link to='/main'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <Search />
      <ThemeController />
      <div className='lang'></div>
      <Link className='login' to='/login'>
        {localStorage.getItem('token') ? 'Exit' : 'Log in'}
      </Link>
      <div className='cart'></div>
    </header>
  )
}
