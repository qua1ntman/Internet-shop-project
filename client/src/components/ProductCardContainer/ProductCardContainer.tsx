import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { IProduct } from "./../../interfaces/dataInterface";

export const ProductCardContainer = ({
  products,
}: {
  products: IProduct[];
}) => {
  return (
    <>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </>
  );
};
