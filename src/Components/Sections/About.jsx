import React from 'react';

import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import reactIcon from "../../images/react.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

// ORDER: HTML → CSS → JS → React → PHP → MySQL → Go → Java → Cloud → Testing → Blockchain
const skills = [
  { src: html, label: "HTML" },
  { src: css, label: "CSS" },
  { src: js, label: "JavaScript" },
  { src: reactIcon, label: "React" },

  // ONLINE ICONS — NO LOCAL FILES NEEDED 🟣
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go (Golang)" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", label: "Cloud Engineering" },
  { src: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png", label: "Software Testing" },
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

          <p className="text-gray-900 text-sm text-start px-3 w-auto md:px-0 leading-loose tracking-wide">

            My name is <strong>Victor Bodude</strong>, an 18-year-old Nigerian 
            <strong> Software Engineer, Cloud Architect, Blockchain Innovator, and Tech Entrepreneur</strong>  
            focused on building clean, scalable, and high-performance digital systems.

            <br /><br />
            I specialize in <strong>Backend Engineering, Full-Stack Development, Cybersecurity, Cloud Infrastructure, Web3 Systems, Software Testing, and AI-powered applications</strong>.  
            I work confidently with technologies such as 
            <strong> Go, Java, PHP, React, JavaScript, MySQL, HTML, and CSS</strong>.

            <br /><br />
            As the founder of <strong>Big7 Technologies</strong> and co-founder of <strong>ServAfri</strong>,  
            I am building Africa’s next generation of digital infrastructure — powering startups, businesses, and creators with reliable and scalable technology.

            <br /><br />
            Every project I build carries one mission:  
            <strong>Empower Africa’s digital future through innovation, speed, and real-world impact.</strong>

            <br /><br />
            The journey is just beginning —  
            <strong>Watch me redefine what’s possible.</strong>
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
            animation: marquee 18s linear infinite;
          }
        `}
      </style>
    </div>
  );
}