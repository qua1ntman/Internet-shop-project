import React from "react";
import "./WrongInputFill.scss";

export const WrongInputFill = ({ field }: { field?: string }) => {
  if (!field) return <div className="wrong-fill">This field cannot be empty</div>;
  if (field === "Repeat password")
    return <div className="wrong-fill">Passwords do not match</div>;
  else return <div className="wrong-fill">{field} is incorrect.</div>;
};
