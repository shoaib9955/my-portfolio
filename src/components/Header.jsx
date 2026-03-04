import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/shoaib-logo.png";
import { useTheme } from "../context/ThemeContext";
import VisitorCounter from "./VisitorCounter";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 backdrop-blur-lg bg-[var(--glass-bg)] border-b border-[var(--border-primary)] shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 object-contain rounded-full border border-[var(--border-primary)]"
          />
          <h1 className="text-xl font-bold tracking-tighter text-[var(--text-primary)]">
            MD SHOAIB<span className="text-blue-500"></span>
          </h1>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[var(--bg-primary-700)] text-[var(--text-primary)] hover:bg-[var(--bg-primary-800)] transition-all duration-300 border border-[var(--border-primary)] shadow-lg"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
          </li>

          {/* Visitor Counter */}
          <li>
            <VisitorCounter />
          </li>

          <li>
            <a
              href="/MERN.NEW_ (2) new.docx.pdf"
              download="Shoaib_Resume.pdf"
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              Resume
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary-900)] text-sm font-bold rounded-full hover:opacity-90 transition-all duration-300"
            >
              Get in Touch
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon & Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[var(--bg-primary-700)] text-[var(--text-primary)] border border-[var(--border-primary)]"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="text-[var(--text-primary)] text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-[var(--bg-primary-900)] border-b border-[var(--border-primary)] px-6 py-8 space-y-6 flex flex-col items-center animate-slide-down">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/MERN.NEW_ (2) new.docx.pdf"
            download="Shoaib_Resume.pdf"
            className="w-full text-center px-5 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>

          {/* Mobile Visitor Analytics */}
          <div className="flex items-center justify-center gap-2 px-5 py-3 bg-primary-700 border border-[var(--border-primary)] rounded-xl">
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Analytics Active
            </span>
          </div>

          <a
            href="#contact"
            className="w-full text-center px-5 py-3 bg-[var(--text-primary)] text-[var(--bg-primary-900)] font-bold rounded-xl"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </a>
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
        `}
      </style>
    </header>
  );
}

export default Header;
