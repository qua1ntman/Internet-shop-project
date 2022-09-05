import React, { useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useApp } from "../../contexts/AppContext";
import { getSubcategory } from "../../queries/categoryQueries";
import './Main.scss'
import { useCategory } from './../../contexts/CategoryContext';

export const Main = () => {

  const { color } = useApp();

  const { setClickedSubcategory, clickedSubcategory } = useCategory()

  const { categories } = useApp()

  useEffect(() => {
    getSubcategory(localStorage.getItem('subcategory') ? JSON.parse(localStorage.getItem('subcategory')!).id : categories[0].subcategories[0].id)
      .then((res) => {
        setClickedSubcategory(res.data)
      })
      .catch((e: Error) => {
        console.log(e.message)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="main-category-data-container">
      <h2>
        Welcome to our shop. 
        We are MIO Market & Co. - world wide commercial company.
        Our target is to simplify all motions to get the product you want.
      </h2>
      <div className="main-cards-container">
        {!clickedSubcategory && 
          <Loader />
        }
        {clickedSubcategory.products?.length === 0 &&
          <p
            style={{ color }}
          >No products</p>
        }
        {clickedSubcategory.products?.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
