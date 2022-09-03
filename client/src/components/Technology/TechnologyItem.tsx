import React from "react";
import { ITechnologyItem } from "../../interfaces/dataInterface";
import './TechnologyItem.scss';

export function TechnologyItem({ technology, description }: ITechnologyItem) {
  return (
    <div className="technology-item">
      <h3 className="technology-title">{technology}</h3>
      <p className="technology-description">{description}</p>
    </div>
  )
}