import React, { Dispatch, SetStateAction, useContext } from "react";
import { appContext } from "../../App";
import { IProduct } from "../../interfaces/dataInterface";
import "./ProductCard.scss";
import { changeOpasity } from "./../../helpers/changeOpasity";
import { formatCurrency } from './../../helpers/formatCurrency';
import { useNavigate } from 'react-router-dom';
import { useCategory } from "../../contexts/CategoryContext";

export const ProductCard = ({ item }: { item: IProduct }) => {

  const navigate = useNavigate()

  const { 
    color, 
    setChosenProduct 
  } = useContext(appContext);
  
  const { setClickedSubcategory, setClickedCategory } = useCategory()

  const handleProductPage = () => {
    setClickedSubcategory('')
    setClickedCategory('')
    setChosenProduct(item)
    navigate({
      pathname: `/product/${item.id}`,
    })
  }

  return (
    <div className="product-card" onClick={handleProductPage}>
      <img className="card-image" src={item.image[0]} alt={item.title} />
      <span
        className="card-status"
        style={{ color: changeOpasity(color, 0.7) }}
      >
        {item.status}
      </span>
      <span className="card-brand" style={{ color }}>
        {item.brand.toUpperCase()}
      </span>
      <span className="card-type" style={{ color: changeOpasity(color, 0.5) }}>
        {item.title.toUpperCase()} | {" "}
        {Array.isArray(item.kind)
          ? item.kind.join(", ").toLocaleUpperCase()
          : item.kind.toUpperCase()}
      </span>
      <span className="card-price" style={{ color }}>
        {formatCurrency(item.price)}
      </span>
    </div>
  );
};
