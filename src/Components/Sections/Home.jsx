import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mypicture from "../../images/mypic.jpg";
import "animate.css";

/* ---------------------------
   ROTATING TITLES
---------------------------- */
const rotatingTexts = [
  "I'm Victor Bodude",
  "I'm a Software Engineer",
  "I'm a Cloud Engineer",
  "I'm a Tech Entrepreneur",
  "I'm a Blockchain Innovator",
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
      transition={{ duration: 0.6 }}
      className="text-black font-semibold text-3xl lg:text-5xl mb-4 leading-tight"
    >
      {rotatingTexts[index]}
    </motion.h2>
  );
}

/* ---------------------------
   ANIMATION FUNCTION
---------------------------- */
const fadeIn = (direction, delay) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay,
      ease: "easeOut",
    },
  },
});

/* ---------------------------
   HOME COMPONENT
---------------------------- */
export default function Home() {
  return (
    <section
      id="home"
      className="w-full bg-[#F9F6F0] px-4 md:px-16 lg:px-28 pt-12 overflow-x-hidden"
    >
      <div className="container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2"
        >
          {/* STATUS */}
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#613B26] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#613B26]"></span>
            </span>
            <p className="text-sm text-[#613B26] font-medium">
              Software Engineer • Tech Entrepreneur
            </p>
          </div>

          {/* TITLE */}
          <RotatingTitles />

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed text-black max-w-xl mb-8">
            I build clean, scalable applications and cloud platforms using modern
            technologies. I specialize in Full-Stack Engineering, Cloud
            Infrastructure, intelligent systems, and high-performance backend
            architecture.
            <br /><br />
            My mission is to create meaningful digital solutions that impact
            businesses, creators, and Africa’s growing tech ecosystem.
          </p>

          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Victor_Bodude_CV.pdf"
            download
            className="inline-block px-8 py-3 rounded-xl bg-[#613B26] text-white font-medium shadow-lg
              hover:bg-transparent hover:text-[#613B26] hover:border-2 hover:border-[#613B26]
              transition-all duration-300"
          >
            My Resume
          </motion.a>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="relative flex justify-center">
            {/* Subtle background glow */}
            <div className="absolute inset-0 rounded-full bg-[#613B26]/10 blur-3xl"></div>

            {/* BIG ROUND IMAGE */}
            <img
              src={mypicture}
              alt="Victor Bodude"
              className="
                relative
                w-72 h-72
                md:w-[420px] md:h-[420px]
                lg:w-[520px] lg:h-[520px]
                rounded-full
                object-cover
                shadow-2xl
                border border-black/10
              "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}