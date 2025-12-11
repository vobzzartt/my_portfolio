import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer 
      className="max-w-full overflow-x-hidden bg-gray-50 text-black py-16 mt-10 px-5 lg:px-30 md:px-20" 
      id="footer"
    >
      {/* Main Footer Sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Identity + Short Mission */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold">Victor Bodude</h2>

          <p className="text-sm leading-relaxed">
            Software Engineer & Tech Entrepreneur building scalable systems 
            and long-term technology solutions for Africa and beyond.
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Connect</h3>

          <div className="flex flex-wrap space-x-2">

            <a 
              href="https://x.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaXTwitter size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/victorbodude"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a 
              href="https://github.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaGithub size={20} />
            </a>

            <a 
              href="https://instagram.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>

          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Let’s Build</h3>

          <p className="text-sm leading-relaxed">
            Have a product idea or system you want to scale?  
            Reach out — I’d love to collaborate.
          </p>

          <a
            href="mailto:victorbodude@gmail.com"
            className="inline-block mt-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} Victor Bodude — Big7 Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}