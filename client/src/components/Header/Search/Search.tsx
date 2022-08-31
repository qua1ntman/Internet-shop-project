import React, { useRef } from "react";
import "./Search.scss";
import SearchImg from "../../../assets/png/search.png";
import { getCategories } from "../../../queries/categoryQueries";

export const Search = () => {
  const searchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const searchController = async () => {
    console.log(searchInputRef.current.value);
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
