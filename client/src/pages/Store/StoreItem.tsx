import React from "react";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import "./StoreItem.scss";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseCartQuantity } = useShoppingCart();

  return (    
    <div className="item-container">
      <img src={imgUrl} alt={''} style={{ width: "125px", height: "75px", objectFit: "cover" }}></img>
      <div className="item-info">
        <p className="item-title">{name}</p>
        <p className="item-price">{formatCurrency(price)}</p>
      </div>
      <div className="mt-auto">
      <button
        className="button-quantity"
        onClick={() => increaseCartQuantity(id)}
      >
        Add To Cart
      </button>
      </div>
    </div>
  );
}


