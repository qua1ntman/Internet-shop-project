import { formatCurrency } from "../../helpers/formatCurrency";
import React from "react";
import { IProductDataAndAmount } from './../../interfaces/dataInterface';
import { storageStateUpdator } from "../../helpers/storageStateUpdator";
import { useApp } from "../../contexts/AppContext";

export function CartItem({ product }: {product: IProductDataAndAmount}) {

  const { cardProducts, setCardProducts } = useApp()

  const handleRemoveCard = (id: number, size: number | string) => {
    storageStateUpdator(
      setCardProducts, 
      (() => cardProducts
      .filter((item) => !(item.size === size && item.id === id) ))(),
      'cardProducts', 'session'
    )
    console.log(cardProducts, (() => cardProducts
      .filter((item) => !(item.size === size && item.id === id) ))());
    
  }

  return (
    <tbody>
      <tr className="item">
        <td className="item-image">
          <img
            src={product.images[0]}
            alt={' '}
            style={{ width: "125px", height: "75px", objectFit: "cover" }}
          />
        </td>
        <td >
          {product.brand}{" "}
        </td>
        <td>
          {product.amount > 0 && (
            <span>
              {product.amount}
            </span>
          )}
        </td>
        <td>
          {product.size}
        </td>
        <td> {formatCurrency(product.price * product.amount)}</td>
        <td>
          <button
            className="button-delete"
            onClick={() => handleRemoveCard(product.id, product.size)}
          >
          &times;
          </button>
        </td>
      </tr>
    </tbody>
  )
}
