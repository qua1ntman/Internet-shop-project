import React, { useContext, useState } from "react";
import { appContext } from "../../App";
import {  IProductData } from "../../interfaces/dataInterface";
import "./ProductCard.scss";
import { changeOpasity } from "./../../helpers/changeOpasity";
import { formatCurrency } from "./../../helpers/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contexts/CategoryContext";
import { useShoppingCart } from "../../contexts/ShoppingCartContext";
import { localStorageStateUpdator } from './../../helpers/localStorageStateUpdator';

export const ProductCard = ({ item }: { item: IProductData }) => {
  
  const navigate = useNavigate();

  const { color, setChosenProduct } = useContext(appContext);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const { increaseCartQuantity } = useShoppingCart();

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
    <div className="product-card" onClick={handleProductPage} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
      <div className="card-hover">
        {isHovering && (
          <><img src={item.images[1]} alt={clickedSubcategory!.title} />
          <ul className="item-size">
            {item.size.map((size) => (
            <li key={size}>{size}</li>
            ))}
          </ul>
          <button className="button-add" onClick={() => increaseCartQuantity(item.id)}>Add to cart</button></>
        )}
      </div>
    </div>
  );
};
