// Footer.js
import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto mb-auto">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <p>
            Made with &hearts; using React JS, Tailwind CSS, and Framer Motion |
            Austin Gilmore | {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
