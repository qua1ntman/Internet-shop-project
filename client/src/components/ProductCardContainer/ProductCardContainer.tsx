import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductCardContainer.scss";
import { useCategory } from './../../contexts/CategoryContext';

export const ProductCardContainer = () => {

  const { clickedSubcategory } = useCategory()

  console.log('ProductCardContainer', clickedSubcategory);
  if (!clickedSubcategory || clickedSubcategory.products?.length === 0) 
    return <p>No products</p>


  return (
    <div className="cards-container">
      {clickedSubcategory.products?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};
