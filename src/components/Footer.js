// Footer.js
import React from 'react';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='mt-auto mb-auto'>
      <div className='container mx-auto'>
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: true }}
          className='text-center opacity-80'>
          <p>Made with &hearts; using React JS, Tailwind CSS, and Framer Motion | Austin Gilmore | 2024</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
