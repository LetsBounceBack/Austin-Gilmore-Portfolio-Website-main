import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Education = () => {
  const degrees = [
    {
      school: "University of Texas at Arlington",
      degree: "Master of Business Administration (MBA)",
      status: "In Progress 2025 - 2028",
      focus: "Business Analytics / Management",
    },
    {
      school: "Arkansas Tech University",
      degree: "B.A. Game & Interactive Media Design",
      status: "2016 - 2020",
    },
  ];

  return (
    <section className="pt-8 pb-20 scroll-mt-96 lg:scroll-mt-0" id="education">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          className="flex-1"
        >
          <h2 className="h2 font-bold">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degrees.map((edu, index) => (
              <div
                key={index}
                className="border-l-4 border-accent bg-white/5 p-6 rounded-r-2xl"
              >
                <h3 className="text-accent font-bold mb-1">{edu.status}</h3>
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-white/60">{edu.school}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
