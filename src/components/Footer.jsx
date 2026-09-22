import { motion } from "framer-motion";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <motion.div variants={itemVariants}>
              <a
                href="#home"
                className="inline-flex items-center gap-3"
                aria-label="MD Shoaib - Home"
              >
                <div className="flex h-9 w-9 items-center justify-center bg-portfolio-primary text-sm font-bold text-white">
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

              <p className="mt-3 max-w-md text-xs leading-5 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Building modern web applications with JavaScript and AI-powered
                features.
              </p>
            </motion.div>

            <div className="flex items-center gap-2">
              <motion.a
                variants={itemVariants}
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center border border-portfolio-border text-portfolio-text-muted transition-colors duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text-muted dark:hover:border-portfolio-primary dark:hover:text-portfolio-primary"
              >
                <FaGithub className="h-4 w-4" />
              </motion.a>

              <motion.a
                variants={itemVariants}
                href="https://www.linkedin.com/in/mdshoaib45"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center border border-portfolio-border text-portfolio-text-muted transition-colors duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text-muted dark:hover:border-portfolio-primary dark:hover:text-portfolio-primary"
              >
                <FaLinkedin className="h-4 w-4" />
              </motion.a>

              <div className="mx-1 hidden h-5 w-px bg-portfolio-border sm:block dark:bg-portfolio-dark-border" />

              <motion.button
                variants={itemVariants}
                type="button"
                onClick={scrollToTop}
                className="group inline-flex h-9 items-center gap-2 border border-portfolio-border px-3 text-xs font-medium text-portfolio-text-muted transition-colors duration-200 hover:border-portfolio-primary hover:text-portfolio-primary dark:border-portfolio-dark-border dark:text-portfolio-dark-text-muted dark:hover:border-portfolio-primary dark:hover:text-portfolio-primary"
              >
                <span>Back to top</span>

                <FaArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
              </motion.button>
            </div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-7 flex flex-col gap-2 border-t border-portfolio-border pt-5 text-[11px] text-portfolio-text-subtle sm:flex-row sm:items-center sm:justify-between dark:border-portfolio-dark-border"
          >
            <p>© {currentYear} MD Shoaib. All rights reserved.</p>

            <p>Built with React · Tailwind CSS · JavaScript</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
