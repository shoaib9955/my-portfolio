import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import myPhoto from "../assets/shoaib3.jpeg";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-60 dark:opacity-30" />

      <div className="section-container relative flex min-h-screen items-center pt-32 lg:pt-28">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* Developer Label */}
            <motion.div variants={itemVariants} className="mb-7">
              <span className="section-label">
                Full-Stack JavaScript Developer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-portfolio-text sm:text-6xl lg:text-7xl xl:text-[5.25rem] dark:text-portfolio-dark-text"
            >
              I build full-stack
              <span className="block text-portfolio-primary dark:text-[#8fbea2]">
                applications with AI.
              </span>
            </motion.h1>

            {/* Introduction */}
            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-base leading-7 text-portfolio-text-muted sm:text-lg sm:leading-8 dark:text-portfolio-dark-text-muted"
            >
              Hi, I'm{" "}
              <span className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                MD Shoaib
              </span>
              . I build modern, production-focused web applications using
              JavaScript, React, Node.js, Express, and MongoDB, with experience
              integrating AI APIs to add intelligent features to real-world
              products.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="primary-button">
                View Projects
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="/MERN.NEW_ (2) new.docx.pdf"
                download="Shoaib_Resume.pdf"
                className="secondary-button"
              >
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="mt-9 flex items-center gap-5"
            >
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-portfolio-text-subtle">
                Connect
              </span>

              <div className="h-px w-8 bg-portfolio-border dark:bg-portfolio-dark-border" />

              <a
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#8fbea2]"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/mdshoaib"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#8fbea2]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="#contact"
                aria-label="Contact"
                className="text-portfolio-text-muted transition-colors duration-200 hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#8fbea2]"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Core Stack */}
            <motion.div
              variants={itemVariants}
              className="mt-12 border-t border-portfolio-border pt-6 dark:border-portfolio-dark-border"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle">
                Core stack
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "AI APIs",
                ].map((technology) => (
                  <span key={technology} className="tech-badge">
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 0.25,
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-portfolio-primary/20 dark:border-[#496956]/30" />

              {/* Photo */}
              <div className="relative h-[25rem] w-[20rem] overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-surface shadow-card sm:h-[30rem] sm:w-[24rem] dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
                <img
                  src={myPhoto}
                  alt="MD Shoaib"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />

                {/* Photo Information */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/65 px-6 py-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#72b58d]" />

                    <span className="text-sm font-medium text-white">
                      Full-Stack Developer
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-white/70">
                    Building web applications & AI-powered features
                  </p>
                </div>
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-7 -left-7 hidden w-56 rounded-xl border border-portfolio-border bg-portfolio-surface p-4 shadow-card sm:block dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-portfolio-text-subtle">
                  Experience
                </p>

                <p className="mt-2 text-sm font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                  Full-Stack Developer Intern
                </p>

                <p className="mt-1 text-xs text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                  Dehix
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-portfolio-text-subtle transition-colors hover:text-portfolio-primary lg:flex"
      >
        <span>Scroll to explore</span>

        <span className="h-8 w-px bg-portfolio-border dark:bg-portfolio-dark-border" />
      </a>
    </section>
  );
}

export default Hero;
