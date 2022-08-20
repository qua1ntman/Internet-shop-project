import React from "react";
import { Outlet } from "react-router-dom";

export const Category = () => {
  return (
    <div className="category-page">
      <h2>Category</h2>
      <Outlet />
    </div>
  );
};
