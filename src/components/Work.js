import React from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import Img1 from "../assets/aryapmock.png";
import Img2 from "../assets/speakstu.png";
import Img3 from "../assets/weather-mockup.png";
import Img4 from "../assets/registermock .png";
import Img5 from "../assets/softwaremock.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto mt-28">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16 text-justify">
                The projects I have developed are listed as follows. Please
                contact me if you have questions about such projects.
              </p>
              <a href="#contact">
                <button className="btn btn-sm">Contact me</button>
              </a>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">Front-End Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Aryap Yapı Tasarım</span>
              </div>
              <a href="https://aryaptasarim.com/">
                <button className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  More
                </button>
              </a>
            </div>

            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img4}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">Register Page</span>
              </div>
              <a href="https://register-mert.netlify.app/">
                <button className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  More
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  Flutter Mobile App Development
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">SpeakSTU Mobile App</span>
              </div>
              <a href="https://www.speakstu.com/">
                <button className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  More
                </button>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Weather Condition App
                </span>
              </div>
              <a href="https://weather-conditions-mert.netlify.app/">
                <button className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  More
                </button>
              </a>
            </div>
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute
               z-40 transition-all duration-300"
              ></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img5}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">React Website Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3x1 text-white">
                  Multi-Page Corporate Website
                </span>
              </div>
              <a href="https://software-co.netlify.app/">
                <button className="btn btn-sm absolute -bottom-full right-12 group-hover:bottom-10 transition-all duration-300 z-50">
                  More
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
