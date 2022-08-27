import React, { useContext } from "react";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ThemeController } from "./ThemeController/ThemeController";
import { Logo } from "../Logo/Logo";

import { useShoppingCart } from "../../pages/Basket/ShoppingCartContext";
import { appContext } from "../../App";

export const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  
  const { color } = useContext(appContext);

  return (
    <header className="main-header">
      <Logo />

      <Search />
      <ThemeController />
      <div className="lang"></div>
      <Link 
        style={{ color }} 
        className="login" 
        to="/login"
      >
        {localStorage.getItem("token") ? "Exit" : "Log in"}
      </Link>
      <div 
        className="cart" 
        onClick={openCart}
        style={{ color }}
      >
        Cart
        {cartQuantity > 0 && (
          <span className="badge-circle">{cartQuantity}</span>
        )}
      </div>
    </header>
  );
};
