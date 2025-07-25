import React from 'react';
import "./App.css";
import Navbar from './components/navbar';
import Hero from './components/hero'
import About from './components/about';

import Benefits from './components/benefit';
import Testimonials from './components/testimonial';
import CTA from './components/cta'

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
