import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.div
      variants={fadeIn("bottom", 0.2)}
      initial="hidden"
      whileInView={"show"}
      wiewport={{ once: false, amount: 0.3 }}
      className="bg-gray-500  gap-x-10 text-base p-4 text-center text-white"
    >
      Copyright &copy; 2023 Mert Arar. All rights reserved.
      <div
        className=" text-[20px] flex place-content-center max-w-full gap-x-6  mx-auto
              lg:mx-0 "
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
      </div>
    </motion.div>
  );
};

export default Footer;
