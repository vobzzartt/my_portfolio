import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import project1Desktop from "../../images/project1-desktop.png";
import project1Mobile from "../../images/project1-mobile.png";
import project2Desktop from "../../images/project2-desktop.png";
import project2Mobile from "../../images/project2-mobile.png";

import { VscGithub } from "react-icons/vsc";
import { HiMiniLink } from "react-icons/hi2";

export default function Projects() {
  const projects = [
    /* -----------------------------------
       🔥 SERVAFRI (REAL PROJECT)
    --------------------------------------*/
    {
      id: 101,
      name: "ServAfri – African Cloud Infrastructure",
      desktopImg: project1Desktop, // update image yourself
      mobileImg: project1Mobile,
      description:
        "ServAfri is Africa’s next-generation cloud infrastructure platform designed for developers, startups, and enterprises. It provides scalable compute, storage, and API systems, with fast African zones, local payments, and transparent billing.",
      technology: "Go (Golang) • Docker • Cloud Architecture • API Systems",
      link: "https://servafri.com",
      code: "", // GitHub empty — as requested
      dataAos: "zoom-in-up",
    },

    /* -----------------------------------
       🔥 BIGBOOST (REAL PROJECT)
    --------------------------------------*/
    {
      id: 102,
      name: "BigBoost Media Hub – SMM Automation Platform",
      desktopImg: project2Desktop, // update image yourself
      mobileImg: project2Mobile,
      description:
        "BigBoost is West Africa’s fastest-growing SMM automation platform. It processes thousands of social engagement orders daily across Instagram, TikTok, YouTube, X, Facebook, and more — with API support, dashboards, and secure payments.",
      technology: "HTML • CSS • JavaScript • PHP • MySQL",
      link: "https://bigboost.com.ng",
      code: "", // GitHub empty — as requested
      dataAos: "zoom-in-up",
    },

    /* -----------------------------------
       ❌ OTHER PROJECTS (COMMENTED OUT)
       — They will NOT display on the UI
       — You can re-enable later
    --------------------------------------*/

    // {
    //   id: 7,
    //   name: "Mesktomolog",
    //   desktopImg: project7Desktop,
    //   mobileImg: project7Mobile,
    //   technology: "React JS + Tailwind CSS",
    //   description: "...",
    //   link: "https://mesktomolog.com/",
    //   code: "",
    //   dataAos: "zoom-in-up",
    // },

    // {
    //   id: 5,
    //   name: "DebtKnights",
    //   ...
    // },

    // {
    //   id: 1,
    //   name: "BeauteCrate",
    //   ...
    // },

    // {
    //   id: 6,
    //   name: "Tour Guide",
    //   ...
    // },

    // {
    //   id: 2,
    //   name: "CK-Designs",
    //   ...
    // },

    // {
    //   id: 3,
    //   name: "MovieBox",
    //   ...
    // },

    // {
    //   id: 4,
    //   name: "CheeseCake",
    //   ...
    // },
  ];

  return (
    <div
      className="max-w-full overflow-x-hidden container mx-auto px-3 lg:px-24 md:px-28 pt-24"
      id="projects"
    >
      {/* Heading */}
      <div className="mb-16 flex items-center gap-x-5 justify-center">
        <div className="relative flex items-center mr-3">
          <span className="blinking-circle absolute w-2 h-2"></span>
          <span className="blinking-circle absolute w-4 h-4"></span>
        </div>
        <h4 className="lg:text-3xl md:text-2xl text-2xl font-bold">
          Projects I Have Worked On
        </h4>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#F9F6F0] shadow-sm px-8 py-10 rounded-lg"
          >
            {/* IMAGES */}
            <div className="flex justify-start gap-2 mb-6" data-aos={project.dataAos}>
              <img
                src={project.desktopImg}
                alt={`${project.name} Desktop`}
                className="w-80 md:w-[370px]"
              />
              <img
                src={project.mobileImg}
                alt={`${project.name} Mobile`}
                className="w-28 hidden md:block"
              />
            </div>

            {/* TEXT */}
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm text-black leading-relaxed mb-4">
              {project.description}
            </p>

            <p className="text-sm font-semibold text-gray-900 mb-4">
              {project.technology}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#613B26] hover:text-[#BB8E5A] inline-flex items-center"
              >
                Code <VscGithub className="ml-1" />
              </a>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#613B26] hover:text-[#BB8E5A] inline-flex items-center"
              >
                View <HiMiniLink className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}