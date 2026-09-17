import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-surface dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10"
        >
          {/* Main Footer Row */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Brand */}
            <motion.div variants={itemVariants}>
              <a
                href="#home"
                className="inline-flex items-center gap-3"
                aria-label="MD Shoaib - Home"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-portfolio-primary text-sm font-bold text-white">
                  MS
                </div>

                <div>
                  <p className="text-sm font-bold tracking-[0.08em] text-portfolio-text dark:text-portfolio-dark-text">
                    MD SHOAIB
                  </p>

                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-portfolio-text-subtle">
                    Full-Stack Developer
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Building practical web applications with modern JavaScript
                technologies and thoughtful AI integration.
              </p>
            </motion.div>

            {/* Social + Back to Top */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                variants={itemVariants}
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-bg text-portfolio-text-muted transition-all duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text-muted dark:hover:border-[#496956] dark:hover:text-[#8fbea2]"
              >
                <FaGithub className="h-4 w-4" />
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/md-shoaib-476892321"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-bg text-portfolio-text-muted transition-all duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text-muted dark:hover:border-[#496956] dark:hover:text-[#8fbea2]"
              >
                <FaLinkedin className="h-4 w-4" />
              </motion.a>

              <motion.div
                variants={itemVariants}
                className="hidden h-6 w-px bg-portfolio-border sm:block dark:bg-portfolio-dark-border"
              />

              <motion.button
                variants={itemVariants}
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group inline-flex items-center gap-2 rounded-lg border border-portfolio-border bg-transparent px-4 py-2.5 text-sm font-medium text-portfolio-text-muted transition-all duration-200 hover:border-portfolio-primary hover:bg-portfolio-primary-light hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text-muted dark:hover:border-[#496956] dark:hover:bg-[#1d3025] dark:hover:text-[#8fbea2]"
              >
                <span>Back to top</span>

                <FaArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </div>

          {/* Bottom Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 border-t border-portfolio-border pt-6 text-xs text-portfolio-text-subtle sm:flex-row sm:items-center sm:justify-between dark:border-portfolio-dark-border"
          >
            <p>© {2024} MD Shoaib. All rights reserved.</p>

            <p>Built with React · Tailwind CSS · JavaScript</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
