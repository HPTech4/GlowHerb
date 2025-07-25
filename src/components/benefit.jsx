import React from 'react';
import { motion } from "framer-motion";
import Product from './product';
import './style.css'

function section() {
    return (
      <section id="benefits" className="benefits">
        <Product />
    <div className="container">
      <h2>Why Choose Glow Herb?</h2>
      <div className="benefit-cards">
        {[
          { title: "100% Organic 💯 ", desc: "No chemicals. No side effects. Just nature." },
          { title: "Skin-Loving Formulas ☘", desc: "Designed to target acne, blemishes, and dull skin." },
          { title: "Trusted by Many", desc: "Glowing reviews from loyal customers around the country." }
        ].map((b, i) => (
          <motion.div className="card" key={i} whileHover={{ scale: 1.05 }}>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
    )
}
 

export default section;
