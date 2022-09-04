import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductCardContainer.scss";
import { useCategory } from './../../contexts/CategoryContext';
import { Sort } from "../Sort/Sort";
import { Loader } from "../Loader/Loader";

export const ProductCardContainer = () => {

  const { clickedSubcategory } = useCategory()
  
  return (
    <div className="sort-plus-products">
      <Sort />
      <div className="cards-container">
        {!clickedSubcategory && 
          <Loader />
        }
        {clickedSubcategory.products?.length === 0 &&
          <p>No products</p>
        }
        {clickedSubcategory.products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
