import { useState } from "react";
import { FaArrowRight, FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-portfolio-border/80 bg-portfolio-bg/95 backdrop-blur-md transition-colors duration-300 dark:border-portfolio-dark-border/80 dark:bg-portfolio-dark-bg/95">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={handleNavClick}
          className="group flex items-center gap-3"
          aria-label="MD Shoaib Home"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-portfolio-text bg-portfolio-text text-xs font-bold text-white transition-colors duration-300 group-hover:border-portfolio-primary group-hover:bg-portfolio-primary dark:border-portfolio-dark-text dark:bg-portfolio-dark-text dark:text-portfolio-dark-bg dark:group-hover:border-[#df8062] dark:group-hover:bg-[#df8062]">
            MS
          </span>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[-0.02em] text-portfolio-text dark:text-portfolio-dark-text">
              MD Shoaib
            </p>

            <p className="text-[10px] uppercase tracking-[0.16em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
              Full-Stack Developer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-xs font-semibold uppercase tracking-[0.13em] text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-text dark:text-portfolio-dark-text-muted dark:hover:text-portfolio-dark-text"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-portfolio-primary transition-all duration-200 group-hover:w-full dark:bg-[#df8062]" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="flex h-10 w-10 items-center justify-center border border-portfolio-border text-portfolio-text-muted transition-all duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text-muted dark:hover:border-[#df8062] dark:hover:text-[#df8062]"
          >
            {theme === "dark" ? (
              <FaSun className="h-3.5 w-3.5" />
            ) : (
              <FaMoon className="h-3.5 w-3.5" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-portfolio-primary bg-portfolio-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-portfolio-primary-hover hover:bg-portfolio-primary-hover sm:flex"
          >
            Let's Talk
            <FaArrowRight className="h-3 w-3" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center border border-portfolio-border text-portfolio-text transition-colors duration-200 hover:border-portfolio-primary hover:text-portfolio-primary lg:hidden dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:border-[#df8062] dark:hover:text-[#df8062]"
          >
            {menuOpen ? (
              <FaTimes className="h-4 w-4" />
            ) : (
              <FaBars className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-portfolio-border bg-portfolio-bg transition-all duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg lg:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`flex items-center justify-between border-b border-portfolio-border py-4 text-sm font-semibold uppercase tracking-[0.12em] text-portfolio-text transition-colors hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text dark:hover:text-[#df8062] ${
                  index === 0 ? "border-t" : ""
                }`}
              >
                <span>{item.label}</span>

                <FaArrowRight className="h-3 w-3" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="primary-button mt-5 w-full"
          >
            Let's Talk
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
