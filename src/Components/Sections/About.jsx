import React from 'react';

import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import reactIcon from "../../images/react.png";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const skills = [
  { src: html, label: "HTML" },
  { src: css, label: "CSS" },
  { src: js, label: "JavaScript" },
  { src: reactIcon, label: "React" },

  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
  { src: "https://cdn-icons-png.flaticon.com/512/1157/1157109.png", label: "Software Testing" },
  { src: "https://cdn-icons-png.flaticon.com/512/414/414927.png", label: "Cloud Computing" },
  { src: "https://cdn-icons-png.flaticon.com/512/7016/7016530.png", label: "Blockchain Innovation" }
];

export default function About() {
  return (
    <div className='max-w-full overflow-x-hidden container mx-auto px-4 md:px-16 lg:pt-24 lg:px-24 pt-12 md:pt-16' id='about'>
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
              <img src={skill.src} className="w-10 mb-2 object-contain" alt={`${skill.label} logo`} />
              <span className="text-xs font-semibold text-center">{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Marquee */}
        <div className="relative overflow-hidden w-full md:hidden mt-4">
          <div className="flex animate-marquee whitespace-nowrap py-2">
            {skills.concat(skills).map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center bg-white p-4 shadow-xl min-w-[110px] mx-3 rounded-md"
              >
                <img src={skill.src} className="w-10 mb-1 object-contain" alt={`${skill.label} logo`} />
                <span className="text-xs font-semibold text-center whitespace-normal">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT TEXT */}
        <div
          className='w-full mt-6 md:mt-0 text-center md:text-center lg:text-center'
          data-aos="zoom-in-left"
        >
          <div className="mb-4 flex items-center justify-center gap-x-5">
            <div className="relative flex items-center mr-3">
              <span className="blinking-circle absolute w-2 h-2"></span>
              <span className="blinking-circle absolute w-4 h-4"></span>
            </div>
            <h4 className='text-2xl font-bold text-center'>
              About
            </h4>
          </div>

          <p className="text-gray-900 text-base md:text-lg font-[450] text-center leading-relaxed tracking-wide px-4 md:px-0">
            I develop scalable and efficient systems designed to deliver smooth experiences and solve practical problems across various industries.

            <br /><br />
            I’m Victor Bodude, an 18-year-old Nigerian software engineer focused on backend development, automation and modern web technologies. I enjoy building products that are fast, stable and straightforward for people to use.

            <br /><br />
            I’m also the founder of Servafri, a cloud platform that makes it easy for developers and businesses to deploy and manage their digital services, with support for localized payments and simple, reliable setup.

            <br /><br />
            Beyond engineering, I take interest in sharing knowledge, guiding younger developers and contributing to the growth of the African tech space.

            <br /><br />
            I like building practical, clean and dependable solutions.
            <br />
            Connect. Let’s create something meaningful.
          </p>
        </div>

      </div>

      {/* Fixed Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 18s linear infinite;
          }
        `}
      </style>
    </div>
  );
}