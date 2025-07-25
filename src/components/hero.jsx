import React from 'react';
import { motion } from "framer-motion";


import './style.css'

function Hero(){
  return (
    <section className="hero">
    <motion.div 
      className="hero-content"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      
      <h1>Glow Naturally with <span>Glow Herb</span></h1>
      <p>Discover the power of botanical skincare made to nourish, heal, and humilate your skin because nayure always knows best</p>
      <a href="#about" className="btn">Explore Product</a>
    </motion.div>
  </section>
  )
    
}

export default Hero;
