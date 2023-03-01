import React from "react";

import Image from "../assets/mertararpp.jpeg";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mt-6  "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[90px]"
            >
              Mert <span>ARAR</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>

              <TypeAnimation
                sequence={[
                  "Game Developer",
                  2000,
                  "Front-End Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                speed={50}
                className="text-sky-400"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Id diam vel quam elementum pulvinar etiam non quam lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor sit amet
              consectetur adipiscing elit duis tristique sollicitudin nibh sit
              amet commodo nulla facilisi nullam vehicula ipsum{" "}
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-8 items-center"
            >
              <a href="#contact">
                <button className="btn btn-lg">Contact me</button>
              </a>
              <a
                href="../assets/mert.pdf"
                download
                className="text-gradient btn-link"
              >
                Download CV
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto
              lg:mx-0 mt-7"
            >
              <a href="https://github.com/MertArar">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mert-arar-6788771bb/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/mertararr/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:min-w-[482px] mx-auto"
          >
            <img src={Image}></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
