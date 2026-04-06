import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  const jobs = [
    {
      company: "UT Arlington Libraries",
      role: "Web Developer",
      duration: "March 2024 - Present",
      description:
        "Redesigned and constructed the Libraries website leveraging Tailwind CSS and Drupal. Ensured WCAG 2.1 AA accessibility compliance and optimized performance by 90%.",
    },
    {
      company: "Responsive Education Solutions",
      role: "Interactive Media Developer & Web Developer",
      duration: "September 2020 - March 2024",
      description:
        "Created responsive web pages using Bootstrap. Devised interactive K-12 learning games using the Construct 3 engine and collaborated on various game concepts.",
    },
    {
      company: "SellingOptionsHQ.com",
      role: "Founder",
      duration: "January 2025 - Present",
      description:
        "Developed a custom stock options scanner using the yFinance API and a Python script for automated Discord economic updates.",
    },
    {
      company: "Tradely Social",
      role: "UI/UX Designer & Front End Developer",
      duration: "February 2024 - April 2024",
      description:
        "Designed wireframes and interactive prototypes in Figma; developed a proof-of-concept mobile application using Flutter and Firebase.",
    },
  ];

  return (
    <section className="pt-14 scroll-mt-96 lg:scroll-mt-0" id="experience">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1 border-b border-white/20 pb-12 mb-12"
        >
          <h2 className="h2 font-bold">Experience</h2>
          <div className="flex flex-col gap-y-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#87CEEB] transition-all"
              >
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <span className="text-[#87CEEB] font-medium">
                    {job.duration}
                  </span>
                </div>
                <h4 className="text-lg mb-4 opacity-80">{job.company}</h4>
                <p className="leading-tight text-white/70">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
