import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Skills = () => {
  const skills = [
    {
      logo: "react-logo.png",
      level: "Advance",
      count: 86,
    },
    {
      logo: "logo-css3",
      level: "Expert",
      count: 90,
    },
    {
      logo: "logo-nodejs",
      level: "Beginner",
      count: 40,
    },
    {
      logo: "logo-react",
      level: "Intermediate",
      count: 80,
    },
    {
      logo: "logo-react",
      level: "Expect",
      count: 90,
    },
  ];
  return (
    <section className="seciton" id="skills">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        id="skills"
        className="py-10 mt-6 mb-6 relative"
      >
        <div className="mt-8 text-gray-100 text-center">
          <motion.h3
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl font-semibold"
          >
            My <span className="text-sky-400">Skills</span>
          </motion.h3>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-gray-500 mt-3 text-lg"
          >
            My knowledge
          </motion.p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {skills?.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-accent relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
              >
                <div
                  style={{
                    background: `conic-gradient(rgb(187, 32, 183) ${skill.count}%,#ddd ${skill.count}%)`,
                  }}
                  className="w-32 h-32 flex items-center justify-center rounded-full"
                >
                  <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-accent">
                    <ion-icon name={skill.logo}></ion-icon>
                  </div>
                </div>
                <p className="text-xl mt-3">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
