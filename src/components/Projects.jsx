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
      className="border-b border-portfolio-border bg-portfolio-bg transition-colors duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-bg"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="max-w-5xl"
        >
          <span className="section-label">Selected Work</span>

          <h2 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.055em] text-portfolio-text sm:text-6xl lg:text-8xl dark:text-portfolio-dark-text">
            Things I've
            <span className="block text-portfolio-primary dark:text-[#df8062]">
              built.
            </span>
          </h2>

          <p className="section-description">
            Full-stack applications built with modern JavaScript technologies,
            real backend architecture, APIs, databases, authentication, and
            AI-powered features.
          </p>
        </motion.div>

        <div className="mt-20 space-y-20">
          {featuredProjects.map((project, index) => {
            const isTaskFlow = project.title === "TaskFlow AI";

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="mb-5 flex items-center justify-between border-t border-portfolio-border pt-4 dark:border-portfolio-dark-border">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                    Featured Project
                  </span>

                  <span className="font-mono text-sm text-portfolio-primary dark:text-[#df8062]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="overflow-hidden border border-portfolio-border bg-portfolio-surface transition-colors duration-300 dark:border-portfolio-dark-border dark:bg-portfolio-dark-surface">
                  <div
                    className={`grid grid-cols-1 ${
                      index % 2 === 0
                        ? "lg:grid-cols-[1.25fr_0.75fr]"
                        : "lg:grid-cols-[0.75fr_1.25fr]"
                    }`}
                  >
                    <div
                      className={`relative min-h-[360px] overflow-hidden bg-[#111110] p-7 sm:min-h-[450px] sm:p-10 ${
                        index % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-40">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                            backgroundSize: "42px 42px",
                          }}
                        />
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                          {isTaskFlow
                            ? "AI Team Operations Platform"
                            : "Gym Management System"}
                        </span>

                        <span className="font-mono text-xs text-white/35">
                          2026
                        </span>
                      </div>

                      <div className="relative z-10 flex h-[300px] items-center justify-center sm:h-[370px]">
                        <div className="w-full max-w-xl">
                          <div className="border border-white/15 bg-[#181817] shadow-2xl">
                            <div className="flex h-9 items-center border-b border-white/10 px-3">
                              <div className="flex gap-1.5">
                                <span className="h-2 w-2 rounded-full bg-white/20" />
                                <span className="h-2 w-2 rounded-full bg-white/15" />
                                <span className="h-2 w-2 rounded-full bg-white/10" />
                              </div>

                              <div className="mx-auto h-4 w-32 border border-white/10 bg-white/[0.03]" />
                            </div>

                            <div className="grid min-h-[220px] grid-cols-[65px_1fr] sm:min-h-[270px]">
                              <div className="border-r border-white/10 bg-[#111110] p-3">
                                <div className="mb-6 h-5 w-5 bg-[#df8062]" />

                                <div className="space-y-3">
                                  <span className="block h-1.5 w-7 bg-white/20" />
                                  <span className="block h-1.5 w-9 bg-white/10" />
                                  <span className="block h-1.5 w-6 bg-white/10" />
                                  <span className="block h-1.5 w-8 bg-white/10" />
                                </div>
                              </div>

                              <div className="p-5 sm:p-7">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <span className="block h-2 w-20 bg-white/20" />
                                    <span className="mt-2 block h-1.5 w-32 bg-white/10" />
                                  </div>

                                  <span className="h-7 w-16 bg-[#df8062]/80" />
                                </div>

                                <div className="mt-7 grid grid-cols-2 gap-3">
                                  <div className="h-20 border border-white/10 bg-white/[0.025]" />
                                  <div className="h-20 border border-white/10 bg-white/[0.025]" />
                                  <div className="h-24 border border-white/10 bg-white/[0.025]" />
                                  <div className="h-24 border border-white/10 bg-white/[0.025]" />
                                </div>

                                <div className="mt-4 h-2 w-2/3 bg-white/10" />
                                <div className="mt-2 h-1.5 w-1/2 bg-white/5" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                          {project.technologies?.slice(0, 4).join(" · ")}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col justify-between p-7 sm:p-10 lg:p-12 ${
                        index % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-primary dark:text-[#df8062]">
                          {isTaskFlow
                            ? "AI-powered SaaS"
                            : "Full-stack application"}
                        </p>

                        <h3 className="mt-5 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] text-portfolio-text sm:text-5xl dark:text-portfolio-dark-text">
                          {project.title}
                        </h3>

                        <p className="mt-7 text-base leading-7 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                          {project.description}
                        </p>

                        <div className="mt-8 border-y border-portfolio-border py-6 dark:border-portfolio-dark-border">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-portfolio-text-subtle dark:text-portfolio-dark-text-muted">
                            Key capabilities
                          </p>

                          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                            {isTaskFlow ? (
                              <>
                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → MERN SaaS architecture
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → JWT authentication
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Role-based access
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Gemini AI integration
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Cloudinary uploads
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Search & pagination
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Gym management
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Admin dashboard
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Member management
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → Subscription management
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → REST APIs
                                </span>

                                <span className="text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                                  → MongoDB
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                          {project.technologies?.map((technology) => (
                            <span key={technology} className="tech-badge">
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-9 flex flex-wrap gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-button"
                          >
                            Live Project
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
                            GitHub
                            <FaGithub className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex flex-col justify-between gap-5 border-t border-portfolio-border pt-5 sm:flex-row sm:items-end dark:border-portfolio-dark-border"
            >
              <div>
                <span className="section-label">More Work</span>

                <h3 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] text-portfolio-text sm:text-4xl dark:text-portfolio-dark-text">
                  Other projects
                </h3>
              </div>

              <a
                href="https://github.com/shoaib9955"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-button w-fit"
              >
                All GitHub Projects
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            <div className="grid grid-cols-1 gap-px overflow-hidden border border-portfolio-border bg-portfolio-border sm:grid-cols-2 lg:grid-cols-3 dark:border-portfolio-dark-border dark:bg-portfolio-dark-border">
              {otherProjects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group flex min-h-[310px] flex-col bg-portfolio-surface p-6 transition-colors duration-300 hover:bg-portfolio-surface-soft dark:bg-portfolio-dark-surface dark:hover:bg-portfolio-dark-surface-soft"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-portfolio-primary dark:text-[#df8062]">
                      {String(index + 3).padStart(2, "0")}
                    </span>

                    {project.apk && (
                      <FaAndroid className="h-4 w-4 text-portfolio-text-subtle dark:text-portfolio-dark-text-muted" />
                    )}
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-2xl font-semibold uppercase leading-none tracking-[-0.035em] text-portfolio-text dark:text-portfolio-dark-text">
                      {project.title}
                    </h4>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies?.slice(0, 3).map((technology) => (
                        <span key={technology} className="tech-badge">
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-4 border-t border-portfolio-border pt-5 dark:border-portfolio-dark-border">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-portfolio-text transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text dark:hover:text-[#df8062]"
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
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-portfolio-text transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text dark:hover:text-[#df8062]"
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
                          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-portfolio-text transition-colors hover:text-portfolio-primary dark:text-portfolio-dark-text dark:hover:text-[#df8062]"
                        >
                          APK
                          <FaAndroid className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-portfolio-border pt-8 dark:border-portfolio-dark-border"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-semibold tracking-[-0.02em] text-portfolio-text dark:text-portfolio-dark-text">
                More code. More experiments. More ideas.
              </p>

              <p className="mt-2 text-sm text-portfolio-text-muted dark:text-portfolio-dark-text-muted">
                Explore the rest of my work on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/shoaib9955"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button w-fit"
            >
              Visit GitHub
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
