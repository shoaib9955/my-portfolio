import { useState } from "react";
import logo from "../assets/shoaib-logo.png";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative sticky top-0 z-50 backdrop-blur-xl bg-white/20 border-b border-white/20 shadow-lg transition-all duration-300 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 bg-yellow-300 rounded-full absolute animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          />
        ))}
      </div>

      <nav className="relative z-10 max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full shadow-md group-hover:shadow-lg transition-transform duration-300"
          />
          <h1 className="text-3xl sm:text-4xl font-serif text-rose-700">
            MD SHOAIB
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-800">
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="relative group">
              <a
                href={`#${section}`}
                className="transition-colors duration-300 hover:text-purple-600"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
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
        <div className="md:hidden bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-6 py-6 space-y-4 text-center font-medium text-gray-800 rounded-b-2xl shadow-2xl animate-slide-down">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="block hover:text-purple-600 transition duration-300 text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(0.5); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow infinite ease-in-out;
          }
        `}
      </style>
    </header>
  );
}

export default Header;
