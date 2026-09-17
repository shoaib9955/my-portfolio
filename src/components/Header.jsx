import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

import logo from "../assets/shoaib-logo.png";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-portfolio-border/80 bg-portfolio-bg/95 py-3 backdrop-blur-xl dark:border-portfolio-dark-border/80 dark:bg-portfolio-dark-bg/95"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex items-center gap-3"
          aria-label="MD Shoaib - Home"
        >
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-portfolio-border bg-portfolio-surface dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
            <img
              src={logo}
              alt="MD Shoaib logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <span className="block text-sm font-bold tracking-[0.08em] text-portfolio-text dark:text-portfolio-dark-text">
              MD SHOAIB
            </span>

            <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-portfolio-text-subtle">
              Full-Stack Developer · AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#8fbea2]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-5 w-px bg-portfolio-border dark:bg-portfolio-dark-border" />

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-surface text-portfolio-text-muted transition-all duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface dark:text-portfolio-dark-text-muted dark:hover:border-[#496956] dark:hover:text-[#8fbea2]"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <FiSun className="h-4 w-4" />
            ) : (
              <FiMoon className="h-4 w-4" />
            )}
          </button>

          {/* Resume */}
          <a
            href="/Shoaib_Full_Stack_Developer_Resume.pdf"
            download="Shoaib_Full_Stack_Developer_Resume.pdf"
            className="primary-button px-4 py-2.5"
          >
            Resume
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-surface text-portfolio-text-muted transition-colors duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface dark:text-portfolio-dark-text-muted"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <FiSun className="h-4 w-4" />
            ) : (
              <FiMoon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-surface text-portfolio-text dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface dark:text-portfolio-dark-text"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full border-b border-portfolio-border bg-portfolio-bg px-5 py-6 shadow-lg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            <nav aria-label="Mobile navigation">
              <ul className="divide-y divide-portfolio-border dark:divide-portfolio-dark-border">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className="flex items-center justify-between py-4 text-base font-medium text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#8fbea2]"
                    >
                      <span>{link.name}</span>
                      <span className="text-portfolio-text-subtle">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/Shoaib_Full_Stack_Developer_Resume.pdf"
                download="Shoaib_Full_Stack_Developer_Resume.pdf"
                onClick={handleNavClick}
                className="primary-button w-full"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="secondary-button w-full"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
