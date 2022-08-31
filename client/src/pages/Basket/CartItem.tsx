import { useShoppingCart } from "./ShoppingCartContext";
import storeItems from "./items.json";
import React from "react";
import { formatCurrency } from "../../helpers/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

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
          {quantity > 0 && (
            <span>
              {quantity}
            </span>
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
