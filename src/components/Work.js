import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Tabs, Tab, Box, Backdrop, Typography, Modal } from "@mui/material";
import {
  SportsEsports,
  DesignServices,
  OpenInNew,
  Info,
  Devices,
  Lightbulb,
  PhoneAndroid,
  Slideshow,
  Close,
} from "@mui/icons-material";
import MakingConnections from "../assets/images/MakingConnections/cover.jpg";
import AdaptationAutomation from "../assets/images//AdaptationAutomation/cover.jpg";
import MidlifeMayhem from "../assets/images/MidlifeMayhem/cover.jpg";
import DNAModel from "../assets/images/DNAModel/cover.jpg";
import NationalEnquirer from "../assets/images/NationalEnquirer/cover.jpg";
import UTA from "../assets/images/UTA/cover.jpg";
import SOHQ from "../assets/images/SellingOptionsHQ/cover.jpg";
import SCI from "../assets/images/SCI/cover.jpg";
import TRC from "../assets/images/TRC/cover.jpg";
import Tradely from "../assets//images/Tradely/cover.jpg";
import Swipers from "./Swiper";

const categories = [
  {
    name: "Web Dev",
    Redirect: "View",
    icon: <Devices />,
    projects: [
      {
        title: "Selling Options HQ",
        type: "Web Dev",
        img: SOHQ,
        link: "http://sellingoptionshq.com/",
        about:
          "Developed a platform for options selling education and an options scanner utilizing the yFinance API to provide real-time market data and interactive features.",
      },
      {
        title: "UTA Libraries",
        type: "Web Dev",
        img: UTA,
        link: "https://libraries.uta.edu/",
        about:
          "Redesigned and developed the UTA Libraries website to meet WCAG AA accessibility standards and improve user experience.",
      },
      {
        title: "5th Grade Science 2nd Edition",
        type: "Web Dev",
        img: SCI,
        // link: "https://curriculumtesting.blob.core.windows.net/files/Austin/Web/SCI.html",
        about: "Transformed PDFs/paper copies into responsive websites.",
      },
      {
        title: "The Retail Chronicle",
        type: "Web Dev",
        img: TRC,
        link: "https://web.archive.org/web/20241112225449/https://theretailchronicle.com/",
        about: "Investment news website built with WordPress.",
      },
    ],
  },
  {
    name: "Game Dev",
    Redirect: "Play",
    icon: <SportsEsports />,
    projects: [
      {
        title: "Adaptation Automation",
        img: AdaptationAutomation,
        link: "https://curriculumtesting.blob.core.windows.net/files/Austin/BIO/BIO-U06-L04-AdaptationAutomation/index.html",
        about:
          "Students learn the concepts of dominant and recessive traits, simulating how they are influenced by their environment.",
      },
      {
        title: "DNA Model",
        img: DNAModel,
        link: "https://curriculumtesting.blob.core.windows.net/files/Austin/BIO/BIO-U02-L06-DNAModel/index.html",
        about:
          "Students learn to create a DNA by building eight sets of nucleotides",
      },
      {
        title: "Making Connections",
        img: MakingConnections,
        link: "https://curriculumtesting.blob.core.windows.net/files/Austin/DAT/DAT-U04-L06-MakingConnections/index.html",
        about:
          "Students acquire the skills to connect audio equipment and instruments to a sound mixer.",
      },
      {
        title: "Mid-Life Mayhem",
        img: MidlifeMayhem,
        link: "https://curriculumtesting.blob.core.windows.net/files/Austin/HGD/HGD-U06-L01-MidLifeMayhem/index.html",
        about:
          "Students discover healthy and unhealthy habits through the collection and elimination of targets.",
      },
    ],
  },
  {
    name: "UX/UI",
    Redirect: "View",
    icon: <DesignServices />,
    projects: [
      {
        title: "National Enquirer Redesign",
        type: "UI/UX Design",
        img: NationalEnquirer,
        link: "/NationalEnquirer",
        about: "Redesign of the National Enquirer app.",
      },
      {
        title: "Tradely",
        type: "UI/UX Design",
        img: Tradely,
        link: "https://www.figma.com/proto/z4LzQY4tKLowaHdMC7ZPG8/Tradely?node-id=178-1923&p=f&t=lAzCxjyG3aDTJRLJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=178%3A1923",
        about: "A fintech social media application for shareholders.",
      },
    ],
  },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCategoryChange = (event, newValue) => {
    setActiveCategory(newValue);
  };

  return (
    <section
      className="section lg:mb-10 mt-20 scroll-mt-96 lg:scroll-mt-60"
      id="work"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* Tab navigation */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="flex justify-center"
          >
            <Tabs
              value={activeCategory}
              onChange={handleCategoryChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#87CEEB",
                },
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
                      "&:hover": {
                        color: "#fafafa",
                        backgroundColor: "#87CEEB20",
                      },
                    },
                  ]}
                  style={{
                    color:
                      activeCategory === category.name
                        ? "#fafafa50"
                        : "#fafafa",
                    transition: "color 0.3s ease-in-out",
                  }}
                />
              ))}
            </Tabs>
          </motion.div>

          {/* Display projects based on the active category */}
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col lg:flex-row gap-x-10"
          >
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.1 }}
              className="flex-1 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-10 mt-10 lg:mb-20"
            >
              {categories
                .find((category) => category.name === activeCategory)
                ?.projects?.map((project, index) => (
                  <div
                    key={index}
                    tabIndex="0" // Makes the div focusable via Tab key
                    role="button" // Tells screen readers this acts like a button
                    aria-label={`View details for ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      // Allows opening with Enter or Space key
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    className="group relative overflow-hidden border-2 border-[#fafafa]/30 lg:hover:border-[#87CEEB]/90 focus:border-[#87CEEB] focus:outline-none rounded-xl cursor-pointer"
                  >
                    {/* Hover BG */}
                    <div className="lg:transition-all sm:transition-all duration-300 lg:group-hover:opacity-100 lg:opacity-0 sm:opacity-100 bg-black/50 w-full h-full absolute z-40 "></div>

                    {/* IMG */}
                    <img
                      className="lg:group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
                      src={project.img}
                      alt=""
                    />
                    <div className="lg:transition-all sm:transition-all duration-500 lg:group-hover:opacity-100 lg:opacity-0 sm:opacity-100">
                      {/* Title */}
                      <div className="group absolute bottom-24 left-8 lg:left-12 z-40">
                        <span className="text-3x1 ">{project.title}</span>
                      </div>
                      {/* Category */}
                      <div className="group absolute bottom-16 left-8 lg:left-12  z-40 lg:cursor-pointer">
                        <span className="text-gradient">{activeCategory}</span>
                      </div>
                      <div className="flex gap-x-4 group absolute bottom-6 left-7 lg:left-11 z-40 lg:cursor-pointer">
                        {/* We removed the View button from here */}
                        <div className="flex items-center">
                          <Info className="mr-1" />
                          <span className="text-3x1">About</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* RENDER MODAL ONCE OUTSIDE THE LOOP */}
      {selectedProject && (
        <BasicModal
          project={selectedProject}
          handleClose={() => setSelectedProject(null)}
          activeCategory={activeCategory}
        />
      )}
    </section>
  );
};

const BasicModal = ({ project, handleClose, activeCategory }) => {
  return (
    <Modal
      open={Boolean(project)}
      onClose={handleClose}
      aria-labelledby="modal-title"
      // BackdropProps helps handle the blur/fade,
      // but we need to ensure the Modal itself allows scrolling
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2, // Padding so the modal doesn't touch screen edges
      }}
    >
      <Box
        sx={{
          position: "relative",
          bgcolor: "#1C2E3F",
          p: 3,
          width: { xs: "95vw", sm: "70vw" },
          maxWidth: "800px", // Good practice for large screens
          maxHeight: "90vh", // Limits height to 90% of the screen
          overflowY: "auto", // Enables vertical scrolling
          borderRadius: 4,
          outline: "none",
          boxShadow: 24,
        }}
      >
        <button
          onClick={handleClose}
          aria-label="Close modal"
          style={{
            position: "sticky", // Changed to sticky so it stays visible while scrolling
            float: "right",
            top: "0",
            right: "0",
            background: "none",
            border: "none",
            color: "#fafafa",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <Close />
        </button>

        {/* Title with Inline Link */}
        <Typography
          id="modal-title"
          variant="h5"
          component="h2"
          color="#fafafa"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack on mobile
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mb: 2,
            textAlign: "center",
          }}
        >
          <span>{project.title}</span>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.9rem",
                color: "#87CEEB",
                textDecoration: "none",
                padding: "4px 12px",
                border: "1px solid #87CEEB",
                borderRadius: "20px",
              }}
              className="hover:bg-[#87CEEB20]"
            >
              View <OpenInNew style={{ fontSize: "1rem" }} />
            </a>
          )}
        </Typography>

        <Typography align="center" color="#fafafa" sx={{ mb: 3, opacity: 0.8 }}>
          {project.about}
        </Typography>

        {/* This is likely what was causing the height issues */}
        <Swipers activeCategory={activeCategory} title={project.title} />
      </Box>
    </Modal>
  );
};

export default Work;
