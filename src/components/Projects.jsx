import { motion } from "framer-motion";
import {
  FaAndroid,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import { projects } from "../data/projects";

function Projects() {
  const featuredTitles = ["TaskFlow AI", "PowerFitness Gym Management"];

  const featuredProjects = projects.filter((project) =>
    featuredTitles.includes(project.title),
  );

  const otherProjects = projects.filter(
    (project) => !featuredTitles.includes(project.title),
  );

  return (
    <section
      id="projects"
      className="border-b border-portfolio-border bg-portfolio-bg dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <span className="section-label">Selected Projects</span>

          <h2 className="section-title">
            Applications I've built from frontend to backend.
          </h2>

          <p className="section-description">
            A selection of full-stack and frontend projects that demonstrate my
            experience with application architecture, APIs, databases,
            authentication, deployment, and AI integration.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mt-14 space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.15 }}
              className="portfolio-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
                {/* Main Content */}
                <div className="p-7 sm:p-9 lg:p-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-primary dark:text-[#8fbea2]">
                        Featured Project
                      </p>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-portfolio-text sm:text-3xl dark:text-portfolio-dark-text">
                        {project.title}
                      </h3>
                    </div>

                    <span className="hidden text-sm font-semibold text-portfolio-text-subtle sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="tech-badge">
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary-button"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        View GitHub
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}

                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button"
                      >
                        Download APK
                        <FaAndroid className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Highlights */}
                <div className="border-t border-portfolio-border bg-portfolio-surface-soft p-7 lg:border-l lg:border-t-0 lg:p-8 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface-soft">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-text-subtle">
                    What it demonstrates
                  </p>

                  <div className="mt-5 space-y-4">
                    {project.title === "TaskFlow AI" && (
                      <>
                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Full-stack SaaS architecture
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Authentication & RBAC
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          AI-powered workflows
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Cloud file uploads
                        </p>
                      </>
                    )}

                    {project.title === "PowerFitness Gym Management" && (
                      <>
                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Full-stack gym management
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Admin authentication
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          Member & subscription management
                        </p>

                        <p className="text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          REST API integration
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-portfolio-primary dark:text-[#8fbea2]">
                  More Projects
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-portfolio-text dark:text-portfolio-dark-text">
                  Other work
                </h3>
              </div>

              <a
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 text-sm font-semibold text-portfolio-primary transition-colors hover:text-portfolio-primary-hover sm:flex dark:text-[#8fbea2]"
              >
                View GitHub
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  className="portfolio-card flex flex-col p-6"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-semibold tracking-[-0.02em] text-portfolio-text dark:text-portfolio-dark-text">
                        {project.title}
                      </h4>

                      <span className="text-xs font-semibold text-portfolio-text-subtle">
                        {String(index + 3).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                      {project.description}
                    </p>

                    {project.technologies?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span key={technology} className="tech-badge">
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-portfolio-border pt-5 dark:border-portfolio-dark-border">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button px-3.5 py-2 text-xs"
                      >
                        Live
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button px-3.5 py-2 text-xs"
                      >
                        GitHub
                        <FaGithub className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.apk && (
                      <a
                        href={project.apk}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="secondary-button px-3.5 py-2 text-xs"
                      >
                        APK
                        <FaAndroid className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 border-t border-portfolio-border pt-8 dark:border-portfolio-dark-border"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-base font-semibold text-portfolio-text dark:text-portfolio-dark-text">
                Want to see more of my work?
              </p>

              <p className="mt-1 text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Explore my repositories and additional projects on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/shoaib9955"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button shrink-0"
            >
              Visit GitHub Profile
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
