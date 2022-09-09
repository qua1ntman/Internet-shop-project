import React, { useState } from "react";
import {  IProductData } from "../../interfaces/dataInterface";
import "./ProductCard.scss";
import { changeOpasity } from "./../../helpers/changeOpasity";
import { formatCurrency } from "./../../helpers/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contexts/CategoryContext";
import { storageStateUpdator } from './../../helpers/storageStateUpdator';
import { useApp } from "../../contexts/AppContext";

export const ProductCard = ({ item }: { item: IProductData }) => {
  const navigate = useNavigate();

  const { color, setChosenProduct } = useApp();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // const { increaseCartQuantity } = useShoppingCart();

  const {
    clickedSubcategory
  } = useCategory();


  const handleProductPage = () => {
    storageStateUpdator(setChosenProduct, item, 'product')
    navigate({
      pathname: `/product/${item.id}`,
    });
  };

  return (
    <div className="product-card" onClick={handleProductPage} onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
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
        {item.kind !== null 
          ? Array.isArray(item.kind)
            ? item.kind.join(", ").toUpperCase()
            : item.kind.toUpperCase() 
          : null}
      </span>
      <span className="card-price" style={{ color }}>
        {formatCurrency(item.price)}
      </span>
      {isHovering && (
        <div className="card-hover">
          <img className="image-hover" src={item.images[1]} alt={' '} />
        </div>
      )}
    </div>
  );
};
