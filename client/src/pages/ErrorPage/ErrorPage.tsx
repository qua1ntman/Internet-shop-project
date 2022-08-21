import React, { useContext } from "react";
import { appContext } from "../../App";

export const ErrorPage = () => {
  const { color } = useContext(appContext) as {
    color: string;
  };
  return (
    <div style={{ color }} className="error-page">
      Page Not Found
    </div>
  );
};
