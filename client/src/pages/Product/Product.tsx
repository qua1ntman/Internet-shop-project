import React, { useEffect, useRef, useState } from "react";
import "./Product.scss";
import { useCategory } from './../../contexts/CategoryContext';
import { useApp } from "../../contexts/AppContext";
import { formatCurrency } from './../../helpers/formatCurrency';
import { Loader } from './../../components/Loader/Loader';
import { storageStateUpdator } from './../../helpers/storageStateUpdator';

export const Product = () => {

  const sizeFieldRef = useRef() as React.MutableRefObject<HTMLSelectElement>
 
  const { 
    theme, 
    color, 
    chosenProduct, 
    setCardProducts, 
    cardProducts
  } = useApp();

  const [bigImg, setBigImg] = useState(chosenProduct!.images[0]);

  const [amount, setAmount] = useState(1)

  const [
    productSize, 
    setProductSize
  ] = useState<string | number>(chosenProduct.size[0])

  const { clickedSubcategory } = useCategory()

  const handleCard = () => {
    storageStateUpdator(
      setCardProducts, 
      (() => {
        let existProd = cardProducts.find((item) => 
          item.id === chosenProduct.id 
          && item.size === productSize
        )
        if (existProd) {
          return cardProducts.map((item) => {
            if (item.id === existProd!.id) {
              return { ...existProd!, amount: item.amount + amount } 
            } else return item
          })
        }
        
        return [
          ...cardProducts, { 
            ...chosenProduct, 
            amount: amount, 
            size: productSize
          }
        ]
      })(),
      'cardProducts', 'session'
    )
   
  }

    if (chosenProduct) {
    return (
      <div className="product-page-container">
        <div className="product-images-container">
          <div className="product-slider">
            {chosenProduct.images.map((img, i) => {
              return (
                <img
                  onClick={() => setBigImg(img)}
                  className="slider-img"
                  key={i}
                  src={img}
                  alt={clickedSubcategory!.title}
                />
              );
            })}
          </div>
          <div className="big-image">
            <img src={bigImg} alt={clickedSubcategory!.title} />
          </div>
        </div>
        <div className="product-info-container">
          <div className="product-sizes">
            <label htmlFor="size" style={{ color }}>
              Size: 
            </label>
            <select 
              name="size" 
              id="size" 
              defaultValue={chosenProduct.size[0]}
              ref={sizeFieldRef}
              onChange={() => setProductSize(sizeFieldRef.current.value)}
            >
              {chosenProduct.size.map((item: string | number, i: number) => {
                return (
                  <option key={i} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="product-description">
            <div className="product-description-name">
              {["Material:", "Color:", "Collection:", "Brands:", "New:"].map(
                (x, i) => {
                  return (
                    <span style={{ color }} key={i}>
                      {x}
                    </span>
                  );
                }
              )}
            </div>
            <div className="product-description-value">
              {[
                Array.isArray(chosenProduct.material) ? chosenProduct.material.join(", ") : chosenProduct.material,
                chosenProduct.color,
                chosenProduct.collection,
                chosenProduct.brand,
                `${chosenProduct.kind ? "Yes" : "No"}`,
              ].map((y, i) => {
                return (
                  <span style={{ color }} key={i}>
                    {y}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="price">Price: {formatCurrency(chosenProduct.price)}</div>
          <div className="product-amount">
            Amount: 
            <button 
              className="default-btn plus-btn"
              onClick={() => setAmount(() => amount-1)}
              disabled={amount === 1}
            >-</button>
            <div>
              <span>{amount}</span>
            </div>
            <button 
              className="default-btn minus-btn"
              onClick={() => setAmount(() => amount+1)}
            >+</button>
          </div>
          <button
            className="default-btn add-to-cart"
            style={{
              color: theme === "light" ? "white" : "black",
              backgroundColor: color,
            }}
            onClick={handleCard}
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    );
  } else return <Loader />;
};
