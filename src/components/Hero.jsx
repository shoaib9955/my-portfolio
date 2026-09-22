import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import myPhoto from "../assets/shoaib3.jpeg";

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-portfolio-border bg-portfolio-bg transition-colors duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="subtle-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">Full-Stack JavaScript Developer</span>
        </motion.div>

        <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="max-w-5xl text-[3.7rem] font-semibold uppercase leading-[0.9] tracking-[-0.065em] text-portfolio-text sm:text-7xl md:text-8xl lg:text-[7.8rem] dark:text-portfolio-dark-text"
            >
              Full-Stack
              <span className="block">Developer</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-8 max-w-3xl">
              <p className="text-2xl font-medium leading-tight tracking-[-0.025em] text-portfolio-text sm:text-3xl dark:text-portfolio-dark-text">
                I build full-stack applications with{" "}
                <span className="text-portfolio-primary dark:text-[#df8062]">
                  AI-powered features.
                </span>
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-portfolio-text-muted sm:text-lg sm:leading-8 dark:text-portfolio-dark-text-muted">
                I build modern web applications from frontend to backend using
                JavaScript, React, Node.js, Express, MongoDB, and AI APIs.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#projects" className="primary-button">
                Explore Projects
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="/Shoaib_Full_Stack_Developer_Resume.pdf"
                download="Shoaib_Full_Stack_Developer_Resume.pdf"
                className="secondary-button"
              >
                <FaDownload className="h-3.5 w-3.5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-5"
            >
              <a
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-portfolio-text-muted transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#df8062]"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mdshoaib45"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-portfolio-text-muted transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#df8062]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="#contact"
                aria-label="Contact"
                className="text-portfolio-text-muted transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text-muted dark:hover:text-[#df8062]"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>

              <span className="h-px w-10 bg-portfolio-border dark:bg-portfolio-dark-border" />

              <span className="text-xs uppercase tracking-[0.18em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                India · Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="relative lg:pb-2"
          >
            <div className="relative overflow-hidden border border-portfolio-border bg-portfolio-surface dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
              <div className="aspect-[4/5]">
                <img
                  src={myPhoto}
                  alt="MD Shoaib"
                  className="mobile-photo-animation h-full w-full object-cover grayscale-[12%] transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              <div className="border-t border-portfolio-border bg-portfolio-surface px-5 py-4 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                      MD Shoaib
                    </p>

                    <p className="mt-1 text-xs text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                      Full-Stack Developer
                    </p>
                  </div>

                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-portfolio-primary dark:text-[#df8062]">
                    7M Experience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 border-y border-portfolio-border py-5 dark:border-portfolio-dark-border"
        >
          <div className="flex flex-wrap items-center justify-between gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
              Technologies I work with
            </span>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Tailwind CSS</span>
              <span>AI APIs</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
