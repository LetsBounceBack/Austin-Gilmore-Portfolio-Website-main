import React from 'react';
//images
import Image from '../assets/avatar.png';
//icons
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section
      className='min-h-[90vh] lg:min-h-[75vh] flex items-center '
    >
      <div className='container mx-auto mt-14 '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.5 }}
            exit={{ opacity: 0 }}
            className='hidden lg:flex mx-auto mb-8 lg:mb-0 lg:mr-5 mix-blend-lighten bg-top'
          >
            <img src={Image} alt='' className='mr-8' />
          </motion.div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              whileInView={'show'}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              exit={{ opacity: 0 }}
              className='text-[40px] font-bold leading-[0.8] lg:text-[60px] '
            >
              Austin <span>Gilmore</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              exit={{ opacity: 0 }}
              className='mt-4 mb-6 text-[20px] md:text-[40px] font-secondary font-semibold  leading-[1]'
            >
              <span className='mr-2'>I am</span>
              <TypeAnimation
                sequence={[
                  'a Creator',
                  2000,
                  'a Developer',
                  2000, //
                  'a Designer',
                  2000,
                  'an Entrepreneur',
                  2000,
                  'a Thinker',
                  2000,
                ]}
                speed={50}
                className='text-secondary'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.5 }}
              exit={{ opacity: 0 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Transforming Ideas Into Interactive Experiences. Below Are Some Of My Works.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.5 }}
              exit={{ opacity: 0 }}
              className='flex max-w-max gap-x-6 items-center mb-6 mx-auto lg:mx-0'
            >
              <button
                onClick={() => window.location = 'mailto:austin.gilmore@hotmail.com'}
                className='btn btn-lg flex items-center'>
                Contact
              </button>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 1.0)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true, amount: 0.5 }}
              exit={{ opacity: 0 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/LetsBounceBack' target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-2xl hover:text-[#6e5494]' title='Github' />
              </a>
              <a href='https://www.youtube.com/@ProdBySour/' target="_blank" rel="noopener noreferrer">
                <FaYoutube className='text-2xl hover:text-[#FF0000]' title='Youtube' />
              </a>
              <a href='https://twitter.com/LetsBounceBack_' target="_blank" rel="noopener noreferrer">
                <FaXTwitter className='text-2xl hover:text-[#657786]' title='X(Twitter)' />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
