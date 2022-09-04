import React, { useContext } from "react";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ThemeController } from "./ThemeController/ThemeController";
import { Logo } from "../Logo/Logo";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { appContext } from "../../App";

export const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  const { color, token, setToken } = useContext(appContext);

  const handleLogin = () => {
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <header className="main-header">
      <Logo />
      <Search />
      <ThemeController />
      <div className="lang"></div>
      {token && 
        <Link to='#' style={{ color }} className="login" onClick={handleLogin}>
          Log out
        </Link> 
      }
      {!token && 
        <Link style={{ color }} className="login" to="/login">
          Log in
        </Link> 
      }
      <div className="cart" onClick={openCart} style={{ color }}>
        Cart
        {cartQuantity > 0 && (
          <span className="badge-circle">{cartQuantity}</span>
        )}
      </div>
    </header>
  );
};
