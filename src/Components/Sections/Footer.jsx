import React from 'react';
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer 
      className="max-w-full overflow-x-hidden bg-gray-50 text-black py-16 mt-10 px-6" 
      id="footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Identity */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Victor Bodude</h2>

          <p className="text-sm leading-relaxed text-gray-700">
            Software Engineer & Tech Entrepreneur building scalable systems and 
            long-term technology solutions for Africa and beyond.
          </p>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Connect</h3>

          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition"
            >
              <FaXTwitter size={24} />
            </a>

            <a 
              href="https://www.linkedin.com/in/victorbodude"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition"
            >
              <FaLinkedin size={24} />
            </a>

            <a 
              href="https://github.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition"
            >
              <FaGithub size={24} />
            </a>

            <a 
              href="https://instagram.com/vobzzartt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:opacity-70 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Let’s Build</h3>

          <p className="text-sm leading-relaxed text-gray-700">
            Have a product idea or a system you want to scale?  
            Send me a message — I’d love to collaborate.
          </p>

          <a
            href="mailto:victorbodude@gmail.com"
            className="inline-block w-fit mt-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Email Me
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-600 pt-6 border-t border-gray-200">
          © {new Date().getFullYear()} Victor Bodude — No Boundaries to Ability ⚙️
        </div>
      </div>
    </footer>
  );
}