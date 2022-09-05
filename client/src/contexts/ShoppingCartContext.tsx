import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { IProductDataAndAmount } from "../interfaces/dataInterface";
import { ShoppingCart } from "../pages/Basket/ShoppingCart/ShoppingCart";
import { useLocalStorage } from "../pages/Basket/useLocalStorage";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemAmount: (id: number) => number;
  increaseCartAmount: (id: number) => void;
  decreaseCartAmount: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartamount: number;
  cartItems: IProductDataAndAmount[];
};

const ShoppingCartContext = createContext({} as CartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<IProductDataAndAmount[]>(
    "shopping-cart",
    []
  );

  const cartamount = cartItems.reduce(
    (amount, item) => item.amount + amount,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemAmount(id: number) {
    return cartItems.find((item) => item.id === id)?.amount || 0;
  }
  function increaseCartAmount(id: number) {
    // setCartItems((currItems) => {
    //   if (!currItems.find((item) => item.id === id)) {
    //     return [...currItems, { id, amount: 1 }];
    //   } else {
    //     return currItems.map((item) => {
    //       if (item.id === id) {
    //         return { ...item, amount: item.amount + 1 };
    //       } else {
    //         return item;
    //       }
    //     });
    //   }
    // });
  }
  function decreaseCartAmount(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.amount === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemAmount,
        increaseCartAmount,
        decreaseCartAmount,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartamount,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
