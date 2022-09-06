import React, { useEffect, useState } from "react";
import { Loader } from "../../components/Loader/Loader";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { useApp } from "../../contexts/AppContext";
import { getSubcategory } from "../../queries/categoryQueries";
import './Main.scss'
import { useCategory } from './../../contexts/CategoryContext';
import { getTelegramCode } from './../../queries/authQueries';

export const Main = () => {

  const { color, categories, backgroundColor } = useApp();

  const { setClickedSubcategory, clickedSubcategory } = useCategory()
  
  const [ code, setCode ] = useState('')

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

  const handleTelegramCode = () => {
    getTelegramCode()
      .then((res) => {
        setCode(res.data)
      })
      .catch((e: Error) => e.message)
  }

  return (
    <div className="main-category-data-container">
      <h2
        style={{ color }}
      >
        Welcome to our shop. 
        We are MIO Market & Co. - world wide commercial company.
        Our target is to simplify all motions to get the product you want.
      </h2>
      <div className="tg-info">
        <p
          style={{ color }}
        >
          You can subscribe our telegram bot to receive information
          about new arrivals of clothes in our store
        </p>
        <div>
          <button 
            className="default-btn"
            onClick={handleTelegramCode}
            style={{ color: backgroundColor, backgroundColor: color }}
          >GET BOT CODE</button>
          <p
            style={{ color }}
          >{code}</p>
        </div>
        <a 
          href="https://t.me/ClothingShopBot" 
          target='_blank' 
          rel="noreferrer"
          style={{ color }}
        >Go To Telegram Bot {'->'} </a>
      </div>
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
