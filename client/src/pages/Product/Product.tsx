import React, { useContext } from "react";
import { appContext } from "../../App";

export const Product = () => {
  const { color } = useContext(appContext) as { color: string };

  return (
    <div className="product-page">
      <h2 style={{ color }}>Product</h2>
    </div>
  );
};
