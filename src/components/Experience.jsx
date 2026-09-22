import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaDownload,
  FaFileAlt,
} from "react-icons/fa";

import experience from "../data/experience";

const internship = experience[0];

function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-portfolio-border bg-portfolio-bg transition-colors duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>

          <h2 className="section-title">
            My professional
            <span className="text-portfolio-primary dark:text-[#8fbea2]">
              {" "}
              journey.
            </span>
          </h2>

          <p className="section-description">
            Practical experience building full-stack applications while
            collaborating with a development team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="portfolio-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[0.3fr_1fr]">
              <div className="border-b border-portfolio-border bg-portfolio-surface-soft p-7 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft lg:border-b-0 lg:border-r">
                <div className="flex items-center gap-3 text-portfolio-primary dark:text-[#8fbea2]">
                  <FaBriefcase className="h-4 w-4" />

                  <span className="text-sm font-semibold">Internship</span>
                </div>

                <div className="mt-7">
                  <p className="text-sm font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                    7 Months
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                    <FaCalendarAlt className="h-3.5 w-3.5" />
                    <span>Full-Stack Development</span>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-portfolio-text dark:text-portfolio-dark-text">
                      Full-Stack Developer Intern
                    </h3>

                    <p className="mt-2 text-sm font-medium text-portfolio-primary dark:text-[#8fbea2]">
                      Dehix
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-portfolio-border bg-portfolio-surface-soft px-3 py-1 text-xs font-medium text-portfolio-text-muted dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft dark:text-portfolio-dark-text-muted">
                    7 Months
                  </span>
                </div>

                <div className="mt-7 space-y-4 text-base leading-7 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                  <p>
                    Worked as a Full-Stack Developer Intern, contributing to web
                    application development across both frontend and backend.
                  </p>

                  <p>
                    Worked closely with a team to develop features, debug
                    issues, integrate APIs, and improve application
                    functionality.
                  </p>

                  <p>
                    Gained practical experience with development workflows,
                    collaboration, Git, API integration, database operations,
                    and writing maintainable application code.
                  </p>
                </div>

                <div className="mt-8 border-t border-portfolio-border pt-7 dark:border-portfolio-dark-border">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "TypeScript",
                      "Nextjs",
                      "Node.js",
                      "Express",
                      "MongoDB",
                      "REST APIs",
                      "Git",
                      "Tailwind CSS",
                    ].map((technology) => (
                      <span key={technology} className="tech-badge">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 border-t border-portfolio-border pt-7 dark:border-portfolio-dark-border">
                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="primary-button"
                  >
                    <FaCertificate className="h-3.5 w-3.5" />
                    View Certificate
                  </a>

                  <a
                    href={internship.completionLetter}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    <FaFileAlt className="h-3.5 w-3.5" />
                    View Completion Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/Shoaib_Full_Stack_Developer_Resume.pdf"
            download="Shoaib_Full_Stack_Developer_Resume.pdf"
            className="primary-button"
          >
            <FaDownload className="h-3.5 w-3.5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
