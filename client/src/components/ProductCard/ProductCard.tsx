import React, { useContext } from "react";
import { appContext } from "../../App";
import { IProduct } from "../../interfaces/dataInterface";
import "./ProductCard.scss";

export const ProductCard = ({ item }: { item: IProduct }) => {
  const { color } = useContext(appContext) as { color: string };

  return (
    <div className="product-card">
      <img className="card-image" src={item.image[0]} alt={item.title} />
      <span className="card-name" style={{ color }}>
        {item.title}
      </span>
      <span className="card-price" style={{ color }}>
        {item.price} $
      </span>
    </div>
  );
};
