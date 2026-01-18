import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mypicture from "../../images/mypic.jpg";
import 'animate.css';

/* ---------------------------
   ROTATING TITLES
---------------------------- */
const rotatingTexts = [
  "I'm Victor Bodude",
  "I'm a Software Engineer",
  "I'm a Web Developer",
  "I'm a Cloud Engineer",
  "I'm a Software Tester",
  "I'm a Blockchain Innovator",
  "I'm a Tech Entrepreneur",
  "I'm friendly, let's connect💙",
];

function RotatingTitles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="text-black font-medium text-3xl lg:text-5xl mb-2 leading-tight tracking-normal text-center md:text-left"
    >
      {rotatingTexts[index]}
    </motion.h2>
  );
}

/* ---------------------------
   ANIMATION FUNCTION
---------------------------- */
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        once: true,
        duration: 1.2,
        delay: delay,
        ease: [0.5, 0.25, 0.25, 0.75],
      },
    },
  };
};

/* ---------------------------
   HOME COMPONENT
---------------------------- */
export default function Home() {
  return (
    <div
      id="home"
      className="w-full px-4 md:px-16 lg:px-28 pt-0 bg-[#F9F6F0] max-w-full overflow-x-hidden"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-8 min-h-screen items-center justify-center mt-[-40px]">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >

          {/* STATUS */}
          <div className="mb-4 flex items-center gap-x-3">
            <div className="relative flex items-center mr-3">
              <span className="absolute w-2 h-2 bg-[#613B26] rounded-full blinking-circle"></span>
              <span className="absolute w-4 h-4 border border-[#613B26] rounded-full blinking-circle"></span>
            </div>
            <h5 className="text-xs font-light text-[#613B26]">
              Software Engineer • Tech Entrepreneur
            </h5>
          </div>

          {/* TITLES */}
          <RotatingTitles />

          {/* INTRO TEXT */}
          <p className="font-normal text-[14px] max-w-2xl mb-6 leading-relaxed tracking-wide text-black text-center md:text-left">
            Building modern digital systems that support Africa’s growing technology landscape.
          </p>

          {/* MY RESUME ONLY (Centered) */}
          <div className="flex items-center justify-center md:justify-start mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/Victor_Bodudee_CV.pdf"
                download="Victor_Bodudee_CV.pdf"
                className="px-8 py-3 bg-[#613B26] text-white rounded-xl font-medium shadow-xl 
                hover:bg-transparent hover:border-2 hover:border-[#613B26] hover:text-[#613B26]
                transition-colors duration-300 inline-flex items-center justify-center text-center h-[52px]"
              >
                My Resume
              </a>
            </motion.div>
          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={mypicture}
              alt="Victor Bodude"
              className="
                object-cover
                rounded-full
                shadow-2xl
                w-[340px] h-[340px]
                md:w-[460px] md:h-[460px]
                lg:w-[650px] lg:h-[650px]
              "
            />
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}