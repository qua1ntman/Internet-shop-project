import React from "react";
import { useApp } from "../../contexts/AppContext";

export const ErrorPage = () => {
  const { color } = useApp();

  return (
    <div style={{ color }} className="error-page">
      Page Not Found
    </div>
  );
};
