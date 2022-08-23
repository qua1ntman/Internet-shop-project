import { useShoppingCart } from "../ShoppingCartContext"
import { formatCurrency } from "../formatCurrency"
import { CartItem } from "../CartItem"
import storeItems from "../items.json"
import React from "react"
import { Drawer } from "@mui/material"
import './ShoppingCart.scss'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Drawer anchor='right' open={isOpen} onClose={closeCart}>
      <h2> Your shopping list</h2>
      <span className="back" onClick={closeCart}>Х</span>
      <div className="cart-container">
        <div className="header-cart">
          <span>Name</span>
          <span>Price</span>
          <span>Delete</span>
      </div>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        Total{' '}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return total + (item?.price || 0) * cartItem.quantity
          }, 0)
        )}
      </div>
      <button className="button-checkout">Checkout</button>
    </Drawer>
  )
}