import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import storeItems from "./items.json";
import { formatCurrency } from "../../helpers/formatCurrency";
import React from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  const quant = getItemQuantity(id);

  const item = storeItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <tbody>
      <tr className="item">
        <td className="item-image">
          <img
            src={item.imgUrl}
            alt={' '}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
        </td>
        <td >
          {item.name}{" "}
        </td>
        <td>
          {quantity === 0 ? (
            <button
              className="button-quantity"
              onClick={() => increaseCartQuantity(id)}
            >
              {quant}
              </button>
            ) : (
            <div
              className=""
              style={{ gap: ".5rem" }}
            >
              <div className="amount">
                <button className="minus" onClick={() => decreaseCartQuantity(id)}>
                  -
                </button>
                <div>
                  <span className="">{quantity}</span>
                </div>
                <button className="plus" onClick={() => increaseCartQuantity(id)}>
                  +
                </button>
              </div>
            </div>
          )}
        </td>
        <td>
          {item.id}
        </td>
        <td> {formatCurrency(item.price * quantity)}</td>
        <td>
          <button
            className="button-delete"
            onClick={() => removeFromCart(item.id)}
          >
          &times;
          </button>
        </td>
      </tr>
    </tbody>
  )
}
