import React from 'react';
import './style.css'
import Aloevera from './Assets/Aloevera.jpg'


function About(){
    return (
        <section id="about" className="about">
          <img src = {Aloevera} alt ="About Alovevera" className="aloe" />
    <div className="container">
          
      <h2>Who We Are</h2>
      <p> Glow Herb is a skincare brand built on the power of natural herbs. We blend traditional remedies with modern skincare science 
        to give your skin a healthy, radiant glow.
        At Glow Herb, we believe skincare should be pure, honest and rooted in nature. We create plant-based formulas that restore your skin's
        natural glow without compromising your healthe or trhe environment. Every product ia a reflection of our passion for herbal remedies, clean beauty
        , and sustainable living
      </p>
    </div>

  </section>
    )
}

export default About;