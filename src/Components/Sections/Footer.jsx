import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-black mt-20 px-6 py-20 border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-16">

        {/* NAME + BIO */}
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-3xl font-semibold tracking-tight">
            Victor Bodude
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Software Engineer & Tech Entrepreneur building scalable systems 
            and long-term technology solutions for Africa and beyond.
          </p>
        </div>

        {/* SOCIAL SECTION */}
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-lg font-medium">Connect</h3>

          <div className="flex items-center gap-10">  
            <a href="https://x.com/vobzzartt" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-70 transition">
              <FaXTwitter size={26} />
            </a>

            <a href="https://www.linkedin.com/in/victorbodude" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-70 transition">
              <FaLinkedin size={26} />
            </a>

            <a href="https://github.com/vobzzartt" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-70 transition">
              <FaGithub size={26} />
            </a>

            <a href="https://instagram.com/vobzzartt" target="_blank" rel="noopener noreferrer"
              className="hover:opacity-70 transition">
              <FaInstagram size={26} />
            </a>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="flex flex-col items-center gap-4 max-w-md">
          <h3 className="text-lg font-medium">Let’s Build</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Have a product idea or a system you want to scale?  
            Reach out — I’d love to collaborate.
          </p>

          <a
            href="mailto:victorbodude@gmail.com"
            className="mt-2 px-7 py-3 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
          >
            Send Me a Mail
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-xs text-gray-500 pt-6">
          © {new Date().getFullYear()} Victor Bodude — No Boundaries to Ability ⚙️
        </div>

      </div>
    </footer>
  );
}