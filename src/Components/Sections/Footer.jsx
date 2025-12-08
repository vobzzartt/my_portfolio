import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';
import { Link } from "react-router-dom";
import mypicture from "../../images/logo.png";

export default function Footer() {
  return (
    <footer className="max-w-full overflow-x-hidden bg-gray-50 text-black py-16 mt-10 px-5 lg:px-30 md:px-20" id="footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Short Bio */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img src={mypicture} alt="Victor Logo" className="w-28" />
          </Link>
          <p className="text-sm leading-relaxed">
            Crafting scalable software, cloud infrastructure, and digital experiences that move Africa forward.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Connect with Me</h3>
          <div className="flex flex-wrap space-x-2">

            <Link 
              to="https://x.com/vobzzartt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaXTwitter size={20} />
            </Link>

            <Link 
              to="https://www.linkedin.com/in/victorbodude" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaLinkedin size={20} />
            </Link>

            <Link 
              to="https://github.com/vobzzartt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaGithub size={20} />
            </Link>

            <Link 
              to="https://instagram.com/vobzzartt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black hover:bg-gray-200 p-2 rounded-full transition"
            >
              <FaInstagram size={20} />
            </Link>

          </div>
        </div>

        {/* CTA – Hire Me */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Let's Work Together</h3>
          <p className="text-sm leading-relaxed">
            Have an idea? I can help you design, build, or scale your product.
          </p>

          <Link
            to="mailto:victorbodude@gmail.com"
            className="inline-block mt-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} Victor Bodude — Big7 Technologies. All Rights Reserved.
      </div>
    </footer>
  );
}