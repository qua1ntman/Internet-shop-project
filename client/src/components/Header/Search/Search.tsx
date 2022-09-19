import React, { useRef } from "react";
import "./Search.scss";
import SearchImg from "../../../assets/png/search.png";
import { getCategories } from "../../../queries/categoryQueries";
// import { IProductData } from "../../../interfaces/dataInterface";

export const Search = () => {
  const searchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const searchController = async () => {
    // let data: IProductData[] = [] as IProductData[]

    await getCategories();
    searchInputRef.current.value = "";
  };

  return (
    <div className="search">
      <label htmlFor=""></label>
      <input ref={searchInputRef} type="text" placeholder="Find..." />
      <button
        id="search_btn"
        style={{
          backgroundImage: `url(${SearchImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        onClick={() => searchController()}
      ></button>
    </div>
  );
};
