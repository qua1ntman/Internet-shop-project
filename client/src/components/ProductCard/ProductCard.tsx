import React, { useContext } from "react";
import { appContext } from "../../App";
import { IProduct } from "../../interfaces/dataInterface";
import "./ProductCard.scss";
import { changeOpasity } from './../../helpers/changeOpasity';

export const ProductCard = ({ item }: { item: IProduct }) => {


  const { color } = useContext(appContext) as { color: string };

  return (
    <div 
      className="product-card"
    >
      <img className="card-image" src={item.image[0]} alt={item.title} />
      <span className="card-status" style={{ color: changeOpasity(color, .7) }}>
        {item.status}
      </span>
      <span className="card-brand" style={{ color }}>
        {item.brand.toUpperCase()}
      </span>
      <span className="card-type" style={{ color: changeOpasity(color, .5) }}>
        {
          item.title.toUpperCase()
        } | {
          Array.isArray(item.kind) ? item.kind.join(', ').toLocaleUpperCase() : item.kind.toUpperCase()
        }
      </span>
      <span className="card-price" style={{ color }}>
        {item.price} $
      </span>
    </div>
  );
};
