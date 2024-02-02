import React from 'react';

//intersection observer
import { useInView } from 'react-intersection-observer';
//icons
import { FaWordpress, FaBootstrap, FaReact, FaGithub } from 'react-icons/fa';
import { SiConstruct3, SiAdobephotoshop, SiAdobeillustrator, SiTailwindcss, SiMicrosoftazure, SiFigma } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const About = () => {
  // inView
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1 bg-about bg-container bg-no-repeat mt-10 h-[440px] mix-blend-lighten bg-top'>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 font-bold'>About Me:</h2>
            <h4 className='h4 mb-4'>Interactive/Web Developer at Responsive Ed. First-gen Chinese immigrant, <span className='font-extrabold text-secondary'>self-taught</span> in Web Dev, Game Dev, Music Production, Graphics Design, and Digital Marketing.</h4>
            <h4 className='h4 mb-4'>My mantra is to <span className='font-extrabold text-secondary'>never stop learning</span>. I believe that If you are passionate and interested in a subject, you can learn it.</h4>
            <h4 className='h4 mb-4'>Outside of work, I'm an avid <span className='font-extrabold text-secondary'>gamer</span>, nature enthusiast, <span className='font-extrabold text-secondary'>entrepreneur</span>, and I enjoy experimenting with new recipes in the kitchen! 👨‍🍳</h4>
            <p className='mb-6'>Frequently used tools:</p>
            <div className='flex items-center mb-6 cursor-pointer'>
              <a href="https://theretailchronicle.com/" target="_blank" rel="noopener noreferrer">
                <FaWordpress className='mr-3 text-4xl hover:text-[#21759b]' title='WordPress' />
              </a>
              <a href="https://html.com/html5/" target="_blank" rel="noopener noreferrer">
                <TiHtml5 className='mr-3 text-4xl hover:text-[#e34f26]' title='HTML5' />
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                <FaBootstrap className='mr-3 text-4xl hover:text-purple-500' title='Bootstrap' />
              </a>
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                <FaReact className='mr-3 text-4xl hover:text-blue-500' title='React' />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                <SiTailwindcss className='mr-3 text-4xl hover:text-cyan-500' title='Tailwind CSS' />
              </a>
              <a href="https://www.construct.net/en" target="_blank" rel="noopener noreferrer">
                <SiConstruct3 className='mr-3 text-4xl hover:text-red-500' title='Construct 3' />
              </a>
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer">
                <SiAdobephotoshop className='mr-3 text-4xl hover:text-[#00a4e4]' title='Adobe Photoshop' />
              </a>
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer">
                <SiAdobeillustrator className='mr-3 text-4xl hover:text-[#fbb034]' title='Adobe Illustrator' />
              </a>
              <a href="https://www.Figma.com" target="_blank" rel="noopener noreferrer">
                <SiFigma className='mr-3 text-4xl hover:text-[#f24e1e]' title='Figma' />
              </a>
              <a href="https://github.com/LetsBounceBack" target="_blank" rel="noopener noreferrer">
                <FaGithub className='mr-3 text-4xl hover:text-[#6e5494]' title='GitHub' />
              </a>
              <a href="https://azure.microsoft.com/en-us" target="_blank" rel="noopener noreferrer">
                <SiMicrosoftazure className='mr-3 text-4xl hover:text-[#89c4ff]' title='Microsoft Azure' />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
