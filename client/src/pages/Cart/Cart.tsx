import React from "react";
import { useApp } from "../../contexts/AppContext";

export const Cart = () => {
  const { backgroundColor } = useApp() as {
    backgroundColor: string;
  };

  return (
    <div className="cart-page">
      <h2 style={{ backgroundColor }}>Cart</h2>
    </div>
  );
};
