import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-black mt-20 px-6 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Left Column — Identity */}
          <div className="flex flex-col gap-4 max-w-md">
            <h2 className="text-3xl font-semibold tracking-tight">
              Victor Bodude
            </h2>

            <p className="text-sm leading-relaxed text-gray-700">
              Software Engineer & Tech Entrepreneur focused on building scalable systems, 
              automation technologies, and long-term digital infrastructure for Africa and beyond.
            </p>
          </div>

          {/* Right Column — Socials + Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-medium">Connect</h3>

            <div className="flex items-center gap-6">
              <a href="https://x.com/vobzzartt" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <FaXTwitter size={22} />
              </a>

              <a href="https://www.linkedin.com/in/victorbodude" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <FaLinkedin size={22} />
              </a>

              <a href="https://github.com/vobzzartt" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <FaGithub size={22} />
              </a>

              <a href="https://instagram.com/vobzzartt" target="_blank" rel="noopener noreferrer"
                className="hover:opacity-70 transition">
                <FaInstagram size={22} />
              </a>
            </div>

            <a
              href="mailto:victorbodude@gmail.com"
              className="px-5 py-2.5 w-fit bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition"
            >
              Send Me an Email
            </a>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="text-center text-xs text-gray-500 pt-8 border-t border-gray-200">
          © {new Date().getFullYear()} Victor Bodude — No Boundaries to Ability ⚙️
        </div>
      </div>
    </footer>
  );
}