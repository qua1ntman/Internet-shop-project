import React, { useContext } from "react";
import { appContext } from "../../App";

export const Main = () => {
  const { color } = useContext(appContext);

  return (
    <div className="main-page">
      <h1 style={{ color }}>Main</h1>
    </div>
  );
};
