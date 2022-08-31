import React from 'react'
import LogoImage from "../../assets/images/about.jpg"
import './About.scss'

export const About = () => {
  return (
    <div className='about'>
      <section className='about-welcome'>
        {/* <h1>Hello, This is MIO</h1> */}
        <img src={LogoImage} alt="logo" />
      </section>
    </div>
  );
};
