import React from 'react';

import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import reactIcon from "../../images/react.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// ORDER: HTML → CSS → JavaScript → React → PHP → Python → Go → Java → MySQL → Software Testing → Cloud Computing → Blockchain Innovation
const skills = [
  { src: html, label: "HTML" },
  { src: css, label: "CSS" },
  { src: js, label: "JavaScript" },
  { src: reactIcon, label: "React" },

  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go (Golang)" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png", label: "Software Testing" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", label: "Cloud Computing" },
  { src: "https://cdn-icons-png.flaticon.com/512/7016/7016530.png", label: "Blockchain Innovation" }
];

export default function About() {
  return (
    <div className='max-w-full overflow-x-hidden container mx-auto px-3 md:px-16 lg:pt-24 lg:px-24 pt-10 md:pt-16' id='about'>
      <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-10 gap-y-6">

        {/* Desktop Skills Grid */}
        <div
          className="hidden md:grid grid-cols-3 gap-4 w-full"
          data-aos="zoom-in-right"
        >
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className='bg-white p-4 shadow-xl flex flex-col items-center justify-center rounded-md'
            >
              <img src={skill.src} className="w-10 mb-2" alt={`${skill.label} logo`} />
              <span className="text-xs font-semibold text-center">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Marquee for Mobile */}
        <div className="relative overflow-x-hidden w-full md:hidden mt-4">
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {[...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-white p-3 shadow-xl min-w-[90px] mx-2 rounded-md"
              >
                <img src={skill.src} className="w-10 mb-1" alt={`${skill.label} logo`} />
                <span className="text-xs font-semibold text-center">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT TEXT */}
        <div
          className='w-full mt-6 md:mt-0 md:text-left md:ml-auto'
          data-aos="zoom-in-left"
        >
          <div className="mb-4 flex items-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-2xl font-bold md:text-start lg:text-start text-center'>
              What You Need To Know
            </h4>
          </div>

          <p className="text-gray-900 text-base md:text-lg text-start px-3 w-auto md:px-0 leading-relaxed tracking-wide">
            I’m Victor Bodude — a Software Engineer, Tech Entrepreneur and emerging Technology Innovist focused on building modern, reliable, and scalable digital experiences. My work blends software engineering, cloud technologies, and intelligent systems to create solutions that feel fast, elegant, and impactful.

            <br /><br />
            I’ve spent the past three years engineering products that combine clean architecture, thoughtful design, and long-term scalability. Even at 18, my journey has been shaped by deep curiosity, continuous learning, and a commitment to building technology that actually solves problems.

            <br /><br />
            I enjoy transforming ideas into real, functional products — from responsive user interfaces to optimized backend systems. My approach is simple: write clean code, design meaningful user experiences, and build technology that delivers real value.

            <br /><br />
            I enjoy turning ideas into real, scalable systems — from concept to architecture to execution. My work revolves around building technology that is fast, reliable, and built to last. I focus on writing clean, efficient code and engineering solutions that deliver long-term value, not quick fixes.

            <br /><br />
            Beyond coding, I’m driven by growth — personal, technical, and entrepreneurial. As a young founder, I thrive on identifying problems worth solving and building products that create real impact. I love engineering systems that scale, automating processes, and creating technology that enables people, businesses, and communities to do more.

            <br /><br />
            I believe innovation isn’t just about creativity — it’s about execution, discipline, and the ability to build what others only talk about. That mindset guides every project I work on, whether I’m designing architectures, building automation, or exploring new technologies that shape the future.

            <br /><br />
            At the core of everything I build is intention, clarity, and a commitment to engineering meaningful digital impact.

            <br /><br />
            Let’s build something great.
          </p>
        </div>

      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite; /* slowed down for readability */
          }
        `}
      </style>
    </div>
  );
}