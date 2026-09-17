import { motion } from "framer-motion";
import { FaArrowRight, FaAward, FaBriefcase, FaFileAlt } from "react-icons/fa";

import experience from "../data/experience.js";

function Experience() {
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
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="experience"
      className="border-b border-portfolio-border bg-portfolio-surface dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <span className="section-label">Experience</span>

          <h2 className="section-title">
            Building experience through real development work.
          </h2>

          <p className="section-description">
            My professional experience has given me practical exposure to
            building applications, working with development teams, and solving
            real-world engineering problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14"
        >
          {experience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}-${index}`}
              variants={itemVariants}
              className="relative border-t border-portfolio-border py-10 first:border-t-0 first:pt-0 last:pb-0 dark:border-portfolio-dark-border"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr] lg:gap-14">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-portfolio-primary dark:text-[#8fbea2]">
                    <FaBriefcase className="h-3.5 w-3.5" />

                    <span>{exp.period}</span>
                  </div>

                  <p className="mt-3 text-sm text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                    {exp.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.025em] text-portfolio-text dark:text-portfolio-dark-text">
                        {exp.role}
                      </h3>

                      <p className="mt-1 text-base font-medium text-portfolio-primary dark:text-[#8fbea2]">
                        {exp.company}
                      </p>
                    </div>

                    <span className="hidden text-xs font-medium uppercase tracking-[0.14em] text-portfolio-text-subtle sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="mt-7 space-y-4">
                    {exp.responsibilities.map((responsibility, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-sm leading-7 text-portfolio-text-muted sm:text-base dark:text-portfolio-dark-text-muted"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-primary dark:bg-[#72a889]" />

                        <p>{responsibility}</p>
                      </li>
                    ))}
                  </ul>

                  {/* Internship Documents */}
                  <div className="mt-8 flex flex-wrap gap-3 border-t border-portfolio-border pt-6 dark:border-portfolio-dark-border">
                    {exp.certificate && (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        <FaAward className="h-3.5 w-3.5" />
                        View Certificate
                      </a>
                    )}

                    {exp.completionLetter && (
                      <a
                        href={exp.completionLetter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        <FaFileAlt className="h-3.5 w-3.5" />
                        View Completion Letter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 border-t border-portfolio-border pt-8 dark:border-portfolio-dark-border"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
              Interested in the details of my professional background?
            </p>

            <a
              href="/MERN.NEW_ (2) new.docx.pdf"
              download="Shoaib_Resume.pdf"
              className="secondary-button"
            >
              View Full Resume
              <FaArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
