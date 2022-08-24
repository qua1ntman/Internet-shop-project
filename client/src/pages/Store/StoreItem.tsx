import React from "react";
import { formatCurrency } from "../../helpers/formatCurrency";
import { useShoppingCart } from "../Basket/ShoppingCartContext";
import "./StoreItem.scss";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <div className="item-container">
      {/* <img src={imgUrl} alt={''}>Image</img> */}
      <div className="item-info">
        <p className="item-title">{name}</p>
        <p className="item-price">{formatCurrency(price)}</p>
      </div>
      <div className="mt-auto">
        {quantity === 0 ? (
          <button
            className="button-quantity"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart
          </button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div className="amount">
              <button
                className="minus"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div>
                <span className="">{quantity}</span> in cart
              </div>
              <button className="plus" onClick={() => increaseCartQuantity(id)}>
                +
              </button>
            </div>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}
