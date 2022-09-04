import React, { useState } from "react";
import { IProductData } from "./../../interfaces/dataInterface";
import "./Product.scss";
import { useCategory } from './../../contexts/CategoryContext';
import { useApp } from "../../contexts/AppContext";

export const Product = ({ product }: { product: IProductData | undefined }) => {

  const [bigImg, setBigImg] = useState(product!.images[0]);

  const { clickedSubcategory } = useCategory()

  const { theme, color } = useApp();

  const handleCatd = () => {
    
  }

  product = product 
    ? product 
    : localStorage.getItem('product') 
      ? JSON.parse(localStorage.getItem('product')!) 
      : undefined

  if (product) {
    return (
      <div className="product-page-container">
        <div className="product-images-container">
          <div className="product-slider">
            {product.images.map((img, i) => {
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
              Size:{" "}
            </label>
            <select name="size" id="size" defaultValue={product.size[0]}>
              {product.size.map((item: string | number, i: number) => {
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
                Array.isArray(product.material) ? product.material.join(", ") : product.material,
                product.color,
                product.collection,
                product.brand,
                `${product.kind ? "Yes" : "No"}`,
              ].map((y, i) => {
                return (
                  <span style={{ color }} key={i}>
                    {y}
                  </span>
                );
              })}
            </div>
          </div>
          <button
            className="default-btn add-to-cart"
            style={{
              color: theme === "light" ? "white" : "black",
              backgroundColor: color,
            }}
            onClick={handleCatd}
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    );
  } else return <div>No no no</div>;
};
