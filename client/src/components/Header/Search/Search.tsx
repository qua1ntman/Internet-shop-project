import React from "react";
import "./Search.scss";
import SearchImg from "../../../assets/png/search.png";

export const Search = () => {
  return (
    <div className="search">
      <label htmlFor=""></label>
      <input type="text" placeholder="Find..." />
      <button
        id="search_btn"
        style={{
          backgroundImage: `url(${SearchImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></button>
    </div>
  );
};
