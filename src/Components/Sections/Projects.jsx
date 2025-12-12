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
    AOS.init({ duration: 700, once: true });
  }, []);

  const projects = [
    {
      id: 101,
      name: "ServAfri – African Cloud Infrastructure",
      desktopImg: project1Desktop,
      mobileImg: project1Mobile,
      description:
        "ServAfri is Africa’s next-generation cloud infrastructure platform designed for developers, startups, and enterprises. It provides scalable compute, storage, and API systems, with fast African zones, local payments, and transparent billing.",
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
        "BigBoost is West Africa’s fastest-growing SMM automation platform. It processes thousands of social engagement orders daily across Instagram, TikTok, YouTube, X, Facebook, and more — with API support, dashboards, and secure payments.",
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
              data-aos={project.dataAos}
            >
              {/* IMAGES */}
              <div className="flex justify-start gap-2 mb-6">
                <img
                  src={project.desktopImg}
                  alt={`${project.name} Desktop`}
                  className="w-80 md:w-[370px] object-cover"
                />
                <img
                  src={project.mobileImg}
                  alt={`${project.name} Mobile`}
                  className="w-28 hidden md:block object-cover"
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
                  href={project.code || "#"}
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

      {/* ============================
          WORK EXPERIENCE SECTION
          ============================ */}
      <div
        className="max-w-full overflow-x-hidden container mx-auto px-3 lg:px-24 md:px-28 pt-24"
        id="experience"
      >
        {/* Heading */}
        <div className="mb-16 flex items-center gap-x-5 justify-center">
          <div className="relative flex items-center mr-3">
            <span className="blinking-circle absolute w-2 h-2"></span>
            <span className="blinking-circle absolute w-4 h-4"></span>
          </div>
          <h4 className="lg:text-3xl md:text-2xl text-2xl font-bold">
            Work Experience
          </h4>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 1 — Big7 Technologies */}
          <div className="bg-[#F9F6F0] shadow-sm px-8 py-10 rounded-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2">Founder — Big7 Technologies</h3>

            <div className="flex items-center gap-3 text-sm text-[#374151] mb-3">
              <span className="font-medium">UK</span>
              <span className="text-[#9CA3AF]">•</span>
              <span className="text-[#6B7280]">2024 — Present</span>
            </div>

            <p className="text-sm text-black mb-4">
              Founded Big7 Technologies as a parent technology company focused on
              building impactful digital products across cloud infrastructure, automation,
              payments, and AI. Overseeing company vision, product direction, and
              long-term ecosystem growth for subsidiaries including ServAfri and BigBoost.
            </p>

            <p className="text-sm font-semibold text-gray-900">
              Leadership • Strategy • Ecosystem Growth
            </p>
          </div>

          {/* 2 — ServAfri */}
          <div className="bg-[#F9F6F0] shadow-sm px-8 py-10 rounded-lg" data-aos="fade-up" data-aos-delay="80">
            <h3 className="text-xl font-semibold mb-2">
              Co-Founder & CTO — ServAfri
            </h3>

            <div className="flex items-center gap-3 text-sm text-[#374151] mb-3">
              <span className="font-medium">Africa</span>
              <span className="text-[#9CA3AF]">•</span>
              <span className="text-[#6B7280]">2025 — Present</span>
            </div>

            <p className="text-sm text-black mb-4">
              Leading engineering and cloud infrastructure at ServAfri — Africa’s
              adaptive cloud platform. Responsible for system architecture, developer tools,
              infrastructure scaling, and building secure, reliable cloud environments for startups and enterprises.
            </p>

            <p className="text-sm font-semibold text-gray-900">
              Engineering Leadership • Cloud Architecture • DevOps
            </p>
          </div>

          {/* 3 — BigBoost Media Hub */}
          <div className="bg-[#F9F6F0] shadow-sm px-8 py-10 rounded-lg" data-aos="fade-up" data-aos-delay="160">
            <h3 className="text-xl font-semibold mb-2">
              Lead — BigBoost Media Hub
            </h3>

            <div className="flex items-center gap-3 text-sm text-[#374151] mb-3">
              <span className="font-medium">Lagos, Nigeria</span>
              <span className="text-[#9CA3AF]">•</span>
              <span className="text-[#6B7280]">2025 — Present</span>
            </div>

            <p className="text-sm text-black mb-4">
              Leading operations, product scaling, automation workflows, and strategic
              growth at one of West Africa’s fastest-growing SMM platforms. Overseeing
              system reliability, performance, and customer-driven improvements.
            </p>

            <p className="text-sm font-semibold text-gray-900">
              Operations Leadership • Product Scaling
            </p>
          </div>

          {/* 4 — Treasure House Logistics */}
          <div className="bg-[#F9F6F0] shadow-sm px-8 py-10 rounded-lg" data-aos="fade-up" data-aos-delay="220">
            <h3 className="text-xl font-semibold mb-2">
              Director of IT — Treasure House Logistics
            </h3>

            <div className="flex items-center gap-3 text-sm text-[#374151] mb-3">
              <span className="font-medium">Ogun State, Nigeria</span>
              <span className="text-[#9CA3AF]">•</span>
              <span className="text-[#6B7280]">2025 — Present</span>
            </div>

            <p className="text-sm text-black mb-4">
              Overseeing IT infrastructure, digital operations, security, and technology
              planning across logistics and business processes. Ensuring efficient systems
              that support large-scale operational needs.
            </p>

            <p className="text-sm font-semibold text-gray-900">
              IT Leadership • Infrastructure • Security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}