import React from "react";

import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const services = [
  {
    name: "HTML, CSS, JavaScript",
    description:
      "During my first internship period, I learned about HTML, CSS and JavaScript and developed a website. I study these languages, which are the skeleton of web development, at the level of expertise.",
    link: "Learn more",
  },
  {
    name: "Reactjs",
    description:
      "Worked with Reactjs in my second internship. I have developed and continue to develop many sites, including this site, with Reactjs. The primary framework I use is Reactjs.",
    link: "Learn more",
  },
  {
    name: "Unity 3D",
    description:
      "In the university graduation project, we integrated the mobile game we developed with Unity 3D into the mobile application that we developed with my team.",
    link: "Learn more",
  },
  {
    name: "Flutter",
    description:
      "I worked as a front-end chief in developing a social media mobile application for students with the Flutter framework in our university's graduation project. I can say that I have good experience in Flutter",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & images */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat w-full mix-blend-lighten lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Front-End Developer with over 4 years of experience <br />{" "}
              <br />I continue to develop myself in different fields. It is not
              for me to count in place.
              <br /> <br /> You can take a look at the projects that I have
              developed
            </h3>
            <a href="#work">
              <button className="btn btn-sm">See my work</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list */}
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight mb-6">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-col flex-1 items-end">
                      <a href="#contact" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
