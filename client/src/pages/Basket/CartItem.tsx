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
    <div className="item">
      {/* <img
        src={item.imgUrl}
        alt={' '}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      /> */}
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <button onClick={() => removeFromCart(item.id)}>&times;</button>
    </div>
  );
}
