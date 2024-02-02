import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Tabs, Tab, Box, Backdrop, Typography, Modal } from '@mui/material';
import { SportsEsports, DesignServices, OpenInNew, Info, Devices, Lightbulb, PhoneAndroid, Slideshow, Close } from '@mui/icons-material';
import MakingConnections from '../assets/images/MakingConnections/cover.jpg';
import AdaptationAutomation from '../assets/images//AdaptationAutomation/cover.jpg';
import MidlifeMayhem from '../assets/images/MidlifeMayhem/cover.jpg';
import DNAModel from '../assets/images/DNAModel/cover.jpg';
import NationalEnquirer from '../assets/images/NationalEnquirer/cover.jpg';
import BIO from '../assets/images/BIO/cover.jpg';
import IPC from '../assets/images/IPC/cover.jpg';
import SCI from '../assets/images/SCI/cover.jpg';
import TRC from '../assets/images/TRC/cover.jpg';
import Tradely from '../assets//images/Tradely/cover.jpg';
import Swipers from './Swiper';


const categories = [
  {
    name: 'Game Dev',
    Redirect: 'Play',
    icon: < SportsEsports />,
    projects: [
      {
        title: 'Adaptation Automation',
        img: AdaptationAutomation,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/BIO/BIO-U06-L04-AdaptationAutomation/index.html',
        about: 'Students learn the concepts of dominant and recessive traits, simulating how they are influenced by their environment.',
      },
      {
        title: 'DNA Model',
        img: DNAModel,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/BIO/BIO-U02-L06-DNAModel/index.html',
        about: 'Students learn to create a DNA by building eight sets of nucleotides',

      },
      {
        title: 'Making Connections',
        img: MakingConnections,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/DAT/DAT-U04-L06-MakingConnections/index.html',
        about: 'Students acquire the skills to connect audio equipment and instruments to a sound mixer.',
      },
      {
        title: 'Mid-Life Mayhem',
        img: MidlifeMayhem,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/HGD/HGD-U06-L01-MidLifeMayhem/index.html',
        about: 'Students discover healthy and unhealthy habits through the collection and elimination of targets.',

      },
    ],
  },
  {
    name: 'UX/UI',
    Redirect: 'Case Study',
    icon: < DesignServices />,
    projects: [
      {
        title: 'National Enquirer Redesign',
        type: 'UI/UX Design',
        img: NationalEnquirer,
        link: '/NationalEnquirer',
        about: 'Redesign of the National Enquirer app.',
      },
      {
        title: 'Tradely',
        type: 'UI/UX Design',
        img: Tradely,
        link: '/',
        about: 'A fintech social media application for shareholders.',
      },

    ],
  },
  {
    name: 'Web Dev',
    Redirect: 'View',
    icon: < Devices />,
    projects: [
      {
        title: 'Integrated Physics and Chemistry',
        type: 'Web Dev',
        img: IPC,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/Web/IPC.html',
        about: 'Transformed PDFs/paper copies into responsive websites.',
      },
      {
        title: 'Biology 2nd Edition',
        type: 'Web Dev',
        img: BIO,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/Web/BIO.html',
        about: 'Transformed PDFs/paper copies into responsive websites.',
      },
      {
        title: '5th Grade Science 2nd Edition',
        type: 'Web Dev',
        img: SCI,
        link: 'https://curriculumtesting.blob.core.windows.net/files/Austin/Web/SCI.html',
        about: 'Transformed PDFs/paper copies into responsive websites.',
      },
      {
        title: 'The Retail Chronicle',
        type: 'Web Dev',
        img: TRC,
        link: 'https://theretailchronicle.com/',
        about: 'Created with WordPress: an investment news blog.',
      },
    ],
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };


  return (
    <section className='section lg:mb-10 mt-20' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0'>
          {/* Tab navigation */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className='flex justify-center'>
            <Tabs
              value={activeCategory}
              onChange={handleCategoryChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#87CEEB'
                }
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category.name}
                  value={category.name}
                  icon={category.icon}
                  label={category.name}
                  sx={[
                    {
                      '&:hover': {
                        color: '#fafafa',
                        backgroundColor: '#87CEEB20',
                      },
                    },
                  ]}
                  style={{
                    color: activeCategory === category.name ? '#fafafa50' : '#fafafa',
                    transition: 'color 0.3s ease-in-out',

                  }}
                />
              ))}
            </Tabs>
          </motion.div>

          {/* Display projects based on the active category */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true, amount: 0.2 }}
            className='flex flex-col lg:flex-row gap-x-10'>
            <motion.div
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className='flex-1 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-10 mt-10 lg:mb-20'>
              {categories
                .find((category) => category.name === activeCategory)
                ?.projects?.map((project, index) => (
                  <div key={index}
                    className='group relative overflow-hidden border-2 border-[#fafafa]/30 lg:hover:border-[#87CEEB]/90 rounded-xl'>
                    {/* Hover BG */}
                    <div className='lg:transition-all sm:transition-all duration-300 lg:group-hover:opacity-100 lg:opacity-0 sm:opacity-100 bg-black/50 w-full h-full absolute z-40 '>
                    </div>

                    {/* IMG */}
                    <img
                      className='lg:group-hover:scale-125 transition-all duration-500 w-full h-full object-cover'
                      src={project.img}
                      alt=''
                    />
                    <div className="lg:transition-all sm:transition-all duration-500 lg:group-hover:opacity-100 lg:opacity-0 sm:opacity-100">

                      {/* Title */}
                      <div className='group absolute bottom-24 left-8 lg:left-12 z-40'>
                        <span className='text-3x1 '>{project.title}</span>
                      </div>

                      {/* Category */}
                      <div className="group absolute bottom-16 left-8 lg:left-12  z-40 lg:cursor-pointer">
                        <span className="text-gradient">{activeCategory}</span>
                      </div>

                      {/* Buttons */}
                      <div className='flex gap-x-4 group absolute bottom-6 left-7 lg:left-11 z-40 lg:cursor-pointer'>
                        {/* open button */}
                        <button
                          onClick={() => window.open(project.link, "_blank", "noopener noreferrer")}
                          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', }}
                        >
                          <OpenInNew className='mr-1' />
                          <span className='text-3x1'>{categories.find(category => category.name === activeCategory)?.Redirect}</span>

                        </button>
                        {/* Modal popup */}
                        <BasicModal title={project.title} about={project.about} link={project.link} activeCategory={activeCategory} />
                      </div>

                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section >
  );
};

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const activeCategory = '';

  const handleModalClick = (event) => {
    if (event.target.className === 'modal-backdrop') {
      handleClose();
    }
  };

  return (
    <div>
      <button
        onClick={() => handleOpen(activeCategory)}
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
      >
        <Info className='mr-1' />
        About
      </button>
      <Modal
        onClick={handleModalClick}
        open={open}
        aria-labelledby="About"
        aria-describedby="More about this project"
      >
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', }}
          className='modal-backdrop'>
          <Box sx={{
            position: 'relative',
            bgcolor: '#1C2E3F', p: 2,
            height: { xs: "auto", sm: "auto", md: "auto" },
            width: { xs: "95vw", sm: "60vw", md: "70vw" },
            borderRadius: 4,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <button
              onClick={handleClose} // Call the close function when the button is clicked
              style={{
                position: 'absolute',
                right: '10px',
                background: 'none',
                cursor: 'pointer',
                color: '#fafafa',
              }}
            >
              <Close style={{ fontSize: '32px' }} />
            </button>
            <Typography align="center" id="modal-modal-title" variant="h6" component="h2" color="#fafafa">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {props.title}
                {/* <button
                  onClick={() => window.open(props.link, "_blank", "noopener noreferrer")}
                  style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <OpenInNew className='mr-1 hover:text-secondary' />
                </button> */}
              </div>
            </Typography>

            <Typography align="center" id="modal-modal-description" sx={{ mt: 1 }} color="#fafafa">
              {props.about}
            </Typography>
            <Swipers activeCategory={props.activeCategory} title={props.title} />
            <br></br>
          </Box>
        </div>
      </Modal >
    </div >
  );
};

export default Work;
