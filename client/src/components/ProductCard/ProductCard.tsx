import React from "react";
import {  IProductData } from "../../interfaces/dataInterface";
import "./ProductCard.scss";
import { changeOpasity } from "./../../helpers/changeOpasity";
import { formatCurrency } from "./../../helpers/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contexts/CategoryContext";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';
import { useApp } from "../../contexts/AppContext";

export const ProductCard = ({ item }: { item: IProductData }) => {
  const navigate = useNavigate();

  const { color, setChosenProduct } = useApp();

  const { 

    clickedSubcategory
  } = useCategory();

  const handleProductPage = () => {
    localStorageStateUpdator(setChosenProduct, item, 'product')
    navigate({
      pathname: `/product/${item.id}`,
    });
  };

  return (
    <div className="product-card" onClick={handleProductPage}>
      <img className="card-image" src={item.images[0]} alt={clickedSubcategory!.title} />
      <span
        className="card-status"
        style={{ color: changeOpasity(color, 0.7) }}
      >
        {item.new ? 'New' : 'Sale'}
      </span>
      <span className="card-brand" style={{ color }}>
        {item.brand.toUpperCase()}
      </span>
      <span className="card-type" style={{ color: changeOpasity(color, 0.5) }}>
        {clickedSubcategory!.title.toUpperCase()} |{" "}
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
