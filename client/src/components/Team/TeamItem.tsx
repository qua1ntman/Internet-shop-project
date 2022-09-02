import React from "react";
import { ITeamItem } from "../../interfaces/dataInterface";
import './TeamItem.scss';


export function TeamItem({ name, position, activity, target }: ITeamItem) {
  return (
    <div className="team-person">
      <h3>{name}</h3>
      <p className='position'>{position}</p>
      <p className='activity'><span>Type of activity:</span> {activity}</p>
      <p className='target'><span>Target of course:</span> {target}</p>
    </div>
  );
}