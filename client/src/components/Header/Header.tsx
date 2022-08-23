import React from "react";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ThemeController } from "./ThemeController/ThemeController";
import { Logo } from "../Logo/Logo";

import { useShoppingCart } from '../../pages/Basket/ShoppingCartContext'

export const Header = () => {

  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <header className="main-header">
      <Logo />

      <Search />
      <ThemeController />
      <div className="lang"></div>
      <Link className="login" to="/login">
        {localStorage.getItem("token") ? "Exit" : "Log in"}
      </Link>
      <div className='cart' onClick={openCart}>Cart
        {cartQuantity > 0 && (
          <span className="badge-circle">
          {cartQuantity}
        </span>
        )}

      </div>   
    </header>
  );
};
