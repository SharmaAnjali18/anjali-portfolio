import React from "react";
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200/85 text-black py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Anjali. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Linkedin"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Github"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Envelope"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
                <li>
                    <a href="#skills" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                        My Skills
                    </a>
                </li>
                <li>
                    <a href="#skills" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                        My Projects
                    </a>
                </li>
                <li>
                    <a href="#skills" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                        Contact
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
