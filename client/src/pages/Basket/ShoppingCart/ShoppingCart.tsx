import { useShoppingCart } from "../../../contexts/ShoppingCartContext";
import { CartItem } from "../CartItem";
import React, { useEffect } from "react";
import { Drawer } from "@mui/material";
import "./ShoppingCart.scss";
import { formatCurrency } from "../../../helpers/formatCurrency";
import { useApp } from "../../../contexts/AppContext";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {



  const { closeCart } = useShoppingCart();

  const { cardProducts } = useApp()

  useEffect(() => {
    console.log(cardProducts);
  }, [cardProducts])

  return (
    <Drawer anchor='right' open={isOpen} onClose={closeCart}>
      <h2 className="basket-header"> Your shopping list</h2>
      <span className="back" onClick={closeCart}>Х</span>
      <table className="cart-container">
        <thead>
          <tr className="header-cart">
            <th>Image</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Size</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        {cardProducts &&
          cardProducts.map(item => (
            <CartItem key={`${item.id}${item.size}`} product={item} />
          ))
        }
        <tfoot>
          <tr>
            <td>
              Total{' '}
                {formatCurrency(
                cardProducts ? cardProducts.reduce((total, cartItem) => {
                  const item = cardProducts.find(i => i.id === cartItem.id)
                  return total + (item?.price || 0) * cartItem.amount
                }, 0) : 0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
      <button className="button-checkout">Checkout</button>
    </Drawer>
  );
}
