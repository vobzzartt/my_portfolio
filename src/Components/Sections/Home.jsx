import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import mypicture from "../../images/mypic.jpg";

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
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.h2
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="text-black font-semibold text-3xl lg:text-5xl mb-4"
    >
      {rotatingTexts[index]}
    </motion.h2>
  );
}

/* ---------------------------
   HOME COMPONENT
---------------------------- */
export default function Home() {
  return (
    <section
      id="home"
      className="w-full bg-[#F9F6F0] px-4 md:px-16 lg:px-28 pt-10 md:pt-14"
    >
      <div className="container mx-auto flex flex-col items-center">

        {/* ================= IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Soft glow */}
          <div className="absolute inset-0 rounded-full bg-[#613B26]/10 blur-3xl"></div>

          <img
            src={mypicture}
            alt="Victor Bodude"
            className="
              relative
              w-[300px] h-[300px]
              sm:w-[340px] sm:h-[340px]
              md:w-[420px] md:h-[420px]
              lg:w-[480px] lg:h-[480px]
              rounded-full
              object-cover
              shadow-2xl
            "
          />
        </motion.div>

        {/* ===== SPACING CONTROL (THIS IS THE FIX) ===== */}
        <div className="mt-10 md:mt-14"></div>

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center max-w-2xl"
        >
          {/* STATUS */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#613B26]"></span>
            <p className="text-sm text-[#613B26] font-medium">
              Software Engineer • Tech Entrepreneur
            </p>
          </div>

          {/* TITLE */}
          <RotatingTitles />

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed text-black mt-2">
            I build clean, scalable applications and cloud platforms using modern
            technologies. I specialize in Full-Stack Engineering, Cloud
            Infrastructure, intelligent systems, and high-performance backend
            architecture.
          </p>

          {/* BUTTON */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Victor_Bodude_CV.pdf"
            download
            className="
              inline-block
              mt-7
              px-8 py-3
              rounded-xl
              bg-[#613B26]
              text-white
              font-medium
              shadow-lg
              hover:bg-transparent
              hover:text-[#613B26]
              hover:border-2
              hover:border-[#613B26]
              transition-all
              duration-300
            "
          >
            My Resume
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}