import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import project1Desktop from "../../images/project1-desktop.png";
import project1Mobile from "../../images/project1-mobile.png";
import project2Desktop from "../../images/project2-desktop.png";
import project2Mobile from "../../images/project2-mobile.png";

import { VscGithub } from "react-icons/vsc";
import { HiMiniLink } from "react-icons/hi2";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const projects = [
    {
      id: 101,
      name: "ServAfri – African Cloud Infrastructure",
      desktopImg: project1Desktop,
      mobileImg: project1Mobile,
      description:
        "ServAfri is Africa’s next-generation cloud infrastructure platform designed for developers, startups, and enterprises. It provides scalable compute, storage, and API systems with localized payments and transparent billing.",
      technology: "Go (Golang) • Docker • Cloud Architecture • API Systems",
      link: "https://servafri.com",
      code: "",
      dataAos: "zoom-in-up",
    },
    {
      id: 102,
      name: "BigBoost Media Hub – SMM Automation Platform",
      desktopImg: project2Desktop,
      mobileImg: project2Mobile,
      description:
        "BigBoost is a high-scale SMM automation platform delivering millions of social engagement services across Instagram, TikTok, YouTube, X, Facebook, and more.",
      technology: "HTML • CSS • JavaScript • PHP • MySQL",
      link: "https://bigboost.com.ng",
      code: "",
      dataAos: "zoom-in-up",
    },
  ];

  return (
    <div>
      {/* ==========================
          PROJECTS SECTION
      ========================== */}
      <section
        id="projects"
        className="max-w-full container mx-auto px-3 lg:px-24 md:px-28 pt-32"
      >
        <div className="mb-20 text-center">
          <h4 className="lg:text-3xl md:text-2xl text-2xl font-bold">
            Selected Projects
          </h4>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-[#613B26]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos={project.dataAos}
              className="bg-[#F9F6F0] px-8 py-10 rounded-lg border border-[#E5E7EB]"
            >
              <div className="flex gap-4 mb-6">
                <img
                  src={project.desktopImg}
                  alt={project.name}
                  className="w-80 md:w-[360px] object-cover"
                />
                <img
                  src={project.mobileImg}
                  alt={project.name}
                  className="w-28 hidden md:block object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.name}
              </h3>

              <p className="text-sm text-black leading-relaxed mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium text-gray-900 mb-5">
                {project.technology}
              </p>

              <div className="flex gap-6">
                <a
                  href={project.code || "#"}
                  className="inline-flex items-center text-[#613B26]"
                >
                  Code <VscGithub className="ml-1" />
                </a>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#613B26]"
                >
                  View <HiMiniLink className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================
          WORK EXPERIENCE (TIMELINE)
      ============================ */}
      <section
        id="experience"
        className="max-w-full container mx-auto px-3 lg:px-24 md:px-28 pt-40"
      >
        <div className="mb-20 text-center">
          <h4 className="lg:text-3xl md:text-2xl text-2xl font-bold">
            Work Experience
          </h4>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-[#613B26]" />
        </div>

        <div className="relative border-l border-[#E5E7EB] pl-8 space-y-16">

          {/* Big7 */}
          <div>
            <span className="absolute -left-[7px] mt-2 w-3 h-3 rounded-full bg-[#613B26]" />
            <h3 className="text-xl font-semibold">
              Founder — Big7 Technologies
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              UK • 2024 — Present
            </p>
            <p className="text-sm text-black mt-4 max-w-3xl">
              Founded Big7 Technologies as a parent technology company focused on
              building scalable digital products across cloud infrastructure,
              automation, and AI. Leading long-term strategy and ecosystem growth.
            </p>
            <p className="text-sm font-medium mt-3">
              Leadership • Strategy • Ecosystem Architecture
            </p>
          </div>

          {/* ServAfri */}
          <div>
            <span className="absolute -left-[7px] mt-2 w-3 h-3 rounded-full bg-[#613B26]" />
            <h3 className="text-xl font-semibold">
              Co-Founder & CTO — ServAfri
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Africa • 2025 — Present
            </p>
            <p className="text-sm text-black mt-4 max-w-3xl">
              Leading engineering and cloud infrastructure. Responsible for system
              architecture, platform reliability, and scalable deployment systems.
            </p>
            <p className="text-sm font-medium mt-3">
              Engineering Leadership • Cloud Architecture • DevOps
            </p>
          </div>

          {/* BigBoost */}
          <div>
            <span className="absolute -left-[7px] mt-2 w-3 h-3 rounded-full bg-[#613B26]" />
            <h3 className="text-xl font-semibold">
              Lead — BigBoost Media Hub
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Lagos, Nigeria • 2025 — Present
            </p>
            <p className="text-sm text-black mt-4 max-w-3xl">
              Leading platform operations, automation workflows, and product
              scaling for a high-traffic SMM automation system.
            </p>
            <p className="text-sm font-medium mt-3">
              Operations Leadership • Product Scaling
            </p>
          </div>

          {/* Treasure House */}
          <div>
            <span className="absolute -left-[7px] mt-2 w-3 h-3 rounded-full bg-[#613B26]" />
            <h3 className="text-xl font-semibold">
              Director of IT — Treasure House Logistics
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Ogun State, Nigeria • 2025 — Present
            </p>
            <p className="text-sm text-black mt-4 max-w-3xl">
              Overseeing IT infrastructure, digital systems, and security strategy
              across logistics and business operations.
            </p>
            <p className="text-sm font-medium mt-3">
              Infrastructure • Security • IT Leadership
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}