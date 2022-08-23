import { Search } from './Search/Search'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from '../../assets/png/logo.png'
import { ThemeController } from '../ThemeController/ThemeController'
import React from 'react'
import { useShoppingCart } from '../../pages/Basket/ShoppingCartContext'

export const Header = () => {

  const { openCart, cartQuantity } = useShoppingCart()

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
      <div className='cart' onClick={openCart}>Cart
        {cartQuantity > 0 && (
          <span className="badge-circle">
          {cartQuantity}
        </span>
        )}
      </div>      
    </header>
  )
}
