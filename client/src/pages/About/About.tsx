import React, { useContext } from "react";
import ImageWelcome from "../../assets/images/team.jpg";
import { TeamItem } from "../../components/Team/TeamItem";
import { team } from "../../@types/team";
import "./About.scss";
import { project } from "../../@types/project";
import { ProjectItem } from "../../components/Project/Project";
import { TechnologyItem } from "../../components/Technology/TechnologyItem";
import { technology } from "../../@types/technology";
import { appContext } from "../../App";

export const About = () => {
  const { color } = useContext(appContext);

  return (
    <div className='about'>
      <section className='about-welcome'>
        <img src={ImageWelcome} alt="team" />
        <p>
          We are the team of beginner frontend developers. 
          We have made every effort to complete the final task of the course 
          of RSSchool in order to gain more knowledge in the field of 
          web development.
        </p>
      </section>
      <section className='about-team' style={{ color }}>
        <h2>About our team</h2>
        <div className="team-description">
          <p className='team-title'>
            If you ever need a guiding hand, rest assured that all 
            of our team is well-trained in the develompent after RSSchool. 
          </p>
          <div className='team-info'>
            {team.map((item) => (
              <TeamItem {...item} key={item.name}/>
            ))}
          </div>
        </div>
      </section>
      <section className="about-project" style={{ color }}>
        <div className="project-info">
          <h2>About our project</h2>
          <p>
            MIO - user-friendly of e-commerce website for clothes. 
            The idea and design of the website was developed based 
            on several sites. 
          </p>
          <h4>Main functionality of application</h4>
          <ul>
            {project.map((item) => (
              <ProjectItem {...item} key={item.functionality} />
            ))}
          </ul>
        </div>
      </section>
      <section className="about-technology" style={{ color }}>
        <div className="technology-info">
          <h2>About used technologies</h2>
          {technology.map((item) => (
            <TechnologyItem {...item} key={item.technology} />
          ))}
        </div>
      </section>
    </div>
  );
};
