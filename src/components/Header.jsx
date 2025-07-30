import { useState } from "react";
import logo from "../assets/Shoaib-logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md bg-white/30 shadow-lg border-b border-white/20"
      data-aos="fade-down"
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <a
          href="/"
          className="flex items-center space-x-3 group transition duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl sm:text-4xl font-serif text-red-400">
            MD SHOAIB
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          <li>
            <a
              href="#about"
              className="hover:text-purple-600 hover:underline underline-offset-4 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-purple-600 hover:underline underline-offset-4 transition duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-purple-600 hover:underline underline-offset-4 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-600 hover:underline underline-offset-4 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-purple-700 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-6 py-4 space-y-4 text-center font-medium text-gray-800">
          <a
            href="#about"
            className="block hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="block hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
