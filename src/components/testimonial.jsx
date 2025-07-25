import React from 'react';
import { motion } from "framer-motion";
import './style.css'


function Testimonial(){
    return (
         <section id="testimonials" className="testimonials">
    <div className="container">
         <h2>What Our Clients Say</h2>
            <div className="benefit-cards">
          {[
            {
              comment: "“I’ve tried so many products, but Glow Herb transformed my skin within weeks! It feels so soft and healthy now.”",
              name: "— Aisha Bello, Lagos"
            },
            {
              comment: "“I’ve tried so many products, but Glow Herb transformed my skin within weeks! It feels so soft and healthy now.”",
              name: "— Aisha Bello, Lagos"
            },
            {
              comment: "“I’ve tried so many products, but Glow Herb transformed my skin within weeks! It feels so soft and healthy now.”",
              name: "— Aisha Bello, Lagos"
            }
          ].map((b, i) => (
            <motion.div className="card" key={i} initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
              <h3>{b.comment}</h3>
              <p>{b.name}</p>
            </motion.div>
                 
             ))}    
          </div>    
        </div>
  </section>
    )
}

export default Testimonial;