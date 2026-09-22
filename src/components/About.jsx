import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="border-b border-portfolio-border bg-portfolio-bg transition-colors duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>

          <h2 className="section-title">
            Building useful products with
            <span className="text-portfolio-primary dark:text-[#8fbea2]">
              {" "}
              clean engineering.
            </span>
          </h2>

          <p className="section-description">
            I'm a Full-Stack JavaScript Developer focused on building reliable,
            responsive, and user-friendly web applications.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="portfolio-card p-7 sm:p-9"
          >
            <div className="space-y-5 text-base leading-7 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
              <p>
                I have experience working with{" "}
                <strong className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                  JavaScript, React, Node.js, Express, and MongoDB
                </strong>{" "}
                to develop full-stack applications from frontend interfaces to
                backend APIs and databases.
              </p>

              <p>
                During my{" "}
                <strong className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                  7-month Full-Stack Developer internship
                </strong>
                , I worked as part of a team and gained practical experience
                with development workflows, collaboration, debugging, and
                building features for real applications.
              </p>

              <p>
                I'm also interested in{" "}
                <strong className="font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                  AI-powered applications
                </strong>{" "}
                and have worked with AI APIs to integrate intelligent features
                into web applications.
              </p>

              <p>
                My current focus is becoming a stronger software engineer by
                improving my understanding of system design, backend
                development, APIs, databases, and production-ready application
                architecture.
              </p>
            </div>

            <div className="mt-8 border-t border-portfolio-border pt-7 dark:border-portfolio-dark-border">
              <a
                href="/Shoaib_Full_Stack_Developer_Resume.pdf"
                download="Shoaib_Full_Stack_Developer_Resume.pdf"
                className="primary-button"
              >
                <FaDownload className="h-3.5 w-3.5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="portfolio-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                Current Focus
              </p>

              <p className="mt-3 text-base font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                Full-Stack Development
              </p>

              <p className="mt-2 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Building complete applications with React, Node.js, Express,
                MongoDB, and modern development practices.
              </p>
            </div>

            <div className="portfolio-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                Exploring
              </p>

              <p className="mt-3 text-base font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                AI-Powered Applications
              </p>

              <p className="mt-2 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Integrating AI APIs into practical web products to create useful
                automation and intelligent features.
              </p>
            </div>

            <div className="portfolio-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                Core Stack
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "REST APIs",
                  "AI APIs",
                ].map((skill) => (
                  <span key={skill} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="secondary-button">
            Explore My Projects
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
