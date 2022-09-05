import React from "react";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import "./Header.scss";
import { ThemeController } from "./ThemeController/ThemeController";
import { Logo } from "../Logo/Logo";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import UserMenu from "../UserMenu/UserMenu";
import { useApp } from "../../contexts/AppContext";

export const Header = () => {
  const { openCart, cartamount } = useShoppingCart();

  const { color, token } = useApp();

  return (
    <header className="main-header">
      <Logo />
      <Search />
      <ThemeController />

      {token && 
        <UserMenu />
      }
      {!token && 
        <Link style={{ color }} className="login" to="/login">
          Log in
        </Link> 
      }
      <div className="cart" onClick={openCart} style={{ color }}>
        Cart
        {cartamount > 0 && (
          <span className="badge-circle">{cartamount}</span>
        )}
      </div>
    </header>
  );
};
