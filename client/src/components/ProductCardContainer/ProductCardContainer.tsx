import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { IProduct } from "./../../interfaces/dataInterface";
import './ProductCardContainer.scss'

export const ProductCardContainer = ({
  products,
}: {
  products: IProduct[];
}) => {
  return (    
    <div className="cards-container">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
