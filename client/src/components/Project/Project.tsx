import React from "react";
import { IProject } from "../../interfaces/dataInterface";

export function ProjectItem({ functionality, text }: IProject) {
  return (
    <li className={functionality}>{text}</li>
  );
}